import { useEffect, useRef, useState } from 'react'

const SYSTEM_PROMPT = `
You are Pixel AI, the official website assistant for Pixel Labs.

BUSINESS PROFILE
- Pixel Labs is a software agency based in Jabalpur, Madhya Pradesh, India.
- We help startups, local businesses, hospitals, schools, shops, and growing companies build and improve their digital products.
- Services: business websites, e-commerce websites, web applications, mobile apps, custom software and ERP, hospital management systems, school management systems, SEO, website redesign, website maintenance, AI and workflow automation, and digital marketing.
- Website and software pricing starts from ₹15,000. Final pricing depends on features, pages, integrations, design, platform, and delivery timeline.
- Contact: WhatsApp +91 7509955205 and email hello@pixellabs.in.
- Working hours: Monday-Saturday 9 AM-7 PM; Sunday 10 AM-4 PM.

RESPONSE RULES
- Answer as a Pixel Labs representative, using only the business facts above. Never invent clients, guarantees, portfolio items, discounts, or fixed delivery dates.
- Detect the user's language. Reply in Hindi/Hinglish when they write Hindi/Hinglish, otherwise reply in English.
- Be friendly, professional, practical, and concise. Prefer 2-5 short sentences.
- Explain which Pixel Labs service fits the user's need and ask at most one useful follow-up question.
- For an exact quote, ask for their requirements and direct them to the contact form or WhatsApp.
- For questions unrelated to Pixel Labs or its services, briefly say you specialize in Pixel Labs services and redirect the conversation.
`.trim()

const INITIAL_MESSAGE = {
  role: 'model',
  text: "Hi! I'm Pixel AI — I can help you learn about our services, pricing, and how Pixel Labs can help your business. What would you like to know?",
}

const styles = `
  .pai__root {
    position: fixed;
    right: 20px;
    bottom: 110px;
    z-index: 10000;
    font-family: Inter, "Segoe UI", system-ui, sans-serif;
  }

  .pai__toggle {
    position: relative;
    display: grid;
    width: 60px;
    height: 60px;
    margin-left: auto;
    place-items: center;
    color: #fff;
    background: linear-gradient(145deg, #8b85ff, #6c63ff 55%, #4b44cc);
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 50%;
    box-shadow:
      0 0 0 7px rgba(108, 99, 255, 0.12),
      0 0 30px rgba(108, 99, 255, 0.65),
      0 12px 30px rgba(0, 0, 0, 0.45);
    cursor: pointer;
    transition: transform 180ms ease, box-shadow 180ms ease;
  }

  .pai__toggle::before {
    position: absolute;
    inset: -7px;
    content: "";
    border: 1px solid rgba(139, 133, 255, 0.35);
    border-radius: inherit;
    animation: pai__pulse 2.2s ease-out infinite;
  }

  .pai__toggle:hover {
    transform: translateY(-3px) scale(1.03);
    box-shadow:
      0 0 0 8px rgba(108, 99, 255, 0.15),
      0 0 38px rgba(108, 99, 255, 0.82),
      0 15px 34px rgba(0, 0, 0, 0.48);
  }

  .pai__tooltip {
    position: absolute;
    right: 72px;
    bottom: 8px;
    width: max-content;
    max-width: 220px;
    padding: 9px 13px;
    color: #f7f7ff;
    background: #181829;
    border: 1px solid rgba(139, 133, 255, 0.28);
    border-radius: 10px;
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.38);
    font-size: 12px;
    font-weight: 600;
    line-height: 1.35;
    opacity: 0;
    pointer-events: none;
    transform: translateX(8px);
    transition: opacity 180ms ease, transform 180ms ease;
    white-space: nowrap;
  }

  .pai__tooltip::after {
    position: absolute;
    right: -5px;
    top: 50%;
    width: 9px;
    height: 9px;
    content: "";
    background: #181829;
    border-top: 1px solid rgba(139, 133, 255, 0.28);
    border-right: 1px solid rgba(139, 133, 255, 0.28);
    transform: translateY(-50%) rotate(45deg);
  }

  .pai__root:hover .pai__tooltip,
  .pai__toggle:focus-visible + .pai__tooltip {
    opacity: 1;
    transform: translateX(0);
  }

  .pai__toggle:focus-visible,
  .pai__close:focus-visible,
  .pai__input:focus-visible,
  .pai__send:focus-visible {
    outline: 2px solid #a9a4ff;
    outline-offset: 3px;
  }

  .pai__robot {
    width: 31px;
    height: 31px;
    filter: drop-shadow(0 0 7px rgba(255, 255, 255, 0.38));
  }

  .pai__window {
    position: absolute;
    right: 0;
    bottom: 76px;
    display: flex;
    width: 350px;
    height: 480px;
    overflow: hidden;
    color: #f7f7ff;
    background:
      radial-gradient(circle at 100% 0%, rgba(108, 99, 255, 0.17), transparent 38%),
      #0d0d1a;
    border: 1px solid rgba(139, 133, 255, 0.24);
    border-radius: 20px;
    box-shadow: 0 24px 70px rgba(0, 0, 0, 0.6), 0 0 35px rgba(108, 99, 255, 0.12);
    opacity: 0;
    pointer-events: none;
    transform: translateY(26px) scale(0.96);
    transform-origin: bottom right;
    transition: opacity 220ms ease, transform 260ms cubic-bezier(0.2, 0.8, 0.2, 1);
    flex-direction: column;
  }

  .pai__window--open {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0) scale(1);
  }

  .pai__header {
    display: flex;
    min-height: 76px;
    padding: 16px 16px 15px;
    align-items: center;
    gap: 11px;
    background: rgba(18, 18, 34, 0.86);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(16px);
  }

  .pai__avatar {
    display: grid;
    width: 41px;
    height: 41px;
    flex: 0 0 auto;
    color: #fff;
    background: linear-gradient(145deg, #847dff, #5149d8);
    border-radius: 13px;
    box-shadow: 0 0 18px rgba(108, 99, 255, 0.38);
    place-items: center;
  }

  .pai__avatar .pai__robot {
    width: 23px;
    height: 23px;
  }

  .pai__heading {
    min-width: 0;
    flex: 1;
  }

  .pai__title {
    margin: 0;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.25;
  }

  .pai__subtitle {
    display: flex;
    margin-top: 3px;
    color: #9999b3;
    font-size: 11px;
    line-height: 1.2;
    align-items: center;
    gap: 5px;
  }

  .pai__status {
    width: 6px;
    height: 6px;
    background: #52dda2;
    border-radius: 50%;
    box-shadow: 0 0 8px rgba(82, 221, 162, 0.8);
  }

  .pai__close {
    display: grid;
    width: 34px;
    height: 34px;
    padding: 0;
    color: #aaaac1;
    background: transparent;
    border: 0;
    border-radius: 9px;
    cursor: pointer;
    place-items: center;
    transition: color 160ms ease, background 160ms ease;
  }

  .pai__close:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.08);
  }

  .pai__messages {
    display: flex;
    min-height: 0;
    padding: 18px 14px;
    overflow-y: auto;
    flex: 1;
    flex-direction: column;
    gap: 12px;
    scroll-behavior: smooth;
  }

  .pai__messages::-webkit-scrollbar {
    width: 5px;
  }

  .pai__messages::-webkit-scrollbar-track {
    background: transparent;
  }

  .pai__messages::-webkit-scrollbar-thumb {
    background: rgba(108, 99, 255, 0.48);
    border-radius: 10px;
  }

  .pai__message {
    max-width: 84%;
    padding: 10px 12px;
    border-radius: 14px;
    font-size: 13px;
    line-height: 1.5;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
    animation: pai__message-in 190ms ease-out;
  }

  .pai__message--model {
    align-self: flex-start;
    color: #dddded;
    background: #181829;
    border: 1px solid rgba(255, 255, 255, 0.07);
    border-bottom-left-radius: 4px;
  }

  .pai__message--user {
    align-self: flex-end;
    color: #fff;
    background: linear-gradient(135deg, #766eff, #5a52df);
    border-bottom-right-radius: 4px;
    box-shadow: 0 6px 18px rgba(108, 99, 255, 0.2);
  }

  .pai__typing {
    display: flex;
    width: fit-content;
    padding: 13px 15px;
    background: #181829;
    border: 1px solid rgba(255, 255, 255, 0.07);
    border-radius: 14px 14px 14px 4px;
    align-items: center;
    gap: 5px;
  }

  .pai__typing-dot {
    width: 6px;
    height: 6px;
    background: #8f89ff;
    border-radius: 50%;
    animation: pai__typing 1.2s ease-in-out infinite;
  }

  .pai__typing-dot:nth-child(2) {
    animation-delay: 160ms;
  }

  .pai__typing-dot:nth-child(3) {
    animation-delay: 320ms;
  }

  .pai__form {
    display: flex;
    padding: 12px;
    background: rgba(18, 18, 32, 0.92);
    border-top: 1px solid rgba(255, 255, 255, 0.07);
    gap: 8px;
    align-items: center;
  }

  .pai__input {
    width: 100%;
    min-width: 0;
    height: 42px;
    padding: 0 13px;
    color: #f7f7ff;
    background: #191929;
    border: 1px solid rgba(255, 255, 255, 0.09);
    border-radius: 12px;
    font: inherit;
    font-size: 13px;
    transition: border-color 160ms ease, box-shadow 160ms ease;
  }

  .pai__input::placeholder {
    color: #74748e;
  }

  .pai__input:focus {
    border-color: rgba(108, 99, 255, 0.72);
    box-shadow: 0 0 0 3px rgba(108, 99, 255, 0.11);
    outline: none;
  }

  .pai__input:disabled {
    opacity: 0.7;
  }

  .pai__send {
    display: grid;
    width: 42px;
    height: 42px;
    padding: 0;
    flex: 0 0 auto;
    color: #fff;
    background: linear-gradient(135deg, #817aff, #5a52df);
    border: 0;
    border-radius: 12px;
    box-shadow: 0 6px 16px rgba(108, 99, 255, 0.27);
    cursor: pointer;
    place-items: center;
    transition: transform 160ms ease, opacity 160ms ease;
  }

  .pai__send:hover:not(:disabled) {
    transform: translateY(-2px);
  }

  .pai__send:disabled {
    cursor: not-allowed;
    opacity: 0.45;
  }

  @keyframes pai__typing {
    0%, 60%, 100% { opacity: 0.35; transform: translateY(0); }
    30% { opacity: 1; transform: translateY(-4px); }
  }

  @keyframes pai__pulse {
    0% { opacity: 0.7; transform: scale(0.92); }
    75%, 100% { opacity: 0; transform: scale(1.18); }
  }

  @keyframes pai__message-in {
    from { opacity: 0; transform: translateY(5px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @media (max-width: 480px) {
    .pai__root {
      right: 20px;
    }

    .pai__window {
      position: fixed;
      right: 12px;
      bottom: 172px;
      width: calc(100vw - 24px);
      height: min(480px, calc(100dvh - 196px));
    }

    .pai__tooltip {
      display: none;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .pai__window,
    .pai__toggle,
    .pai__send {
      transition: none;
    }

    .pai__toggle::before,
    .pai__typing-dot,
    .pai__message {
      animation: none;
    }
  }
`

function RobotIcon() {
  return (
    <svg
      className="pai__robot"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M16 7V4m-2 0h4M8.5 11.5h15a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M10.5 17h.01M21.5 17h.01M11.5 21c2.7 1.7 6.3 1.7 9 0M5.5 17H3m23.5 0H29"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
      />
    </svg>
  )
}

function getFallbackResponse(question) {
  const normalized = question.toLowerCase()
  const isHindi =
    /[\u0900-\u097f]/.test(question) ||
    /\b(kya|kaise|kitna|price|daam|chahiye|bana|banwana|service|samay)\b/i.test(question)

  if (/price|pricing|cost|budget|rate|charge|kitna|daam|कीमत|प्राइस/.test(normalized)) {
    return isHindi
      ? 'Pixel Labs mein projects ₹15,000 se start hote hain. Exact price features, pages, design aur integrations par depend karega. Aap kis type ka website ya software banwana chahte hain?'
      : 'Pixel Labs projects start from ₹15,000. The exact quote depends on features, pages, design, and integrations. What would you like us to build?'
  }

  if (/website|web development|ecommerce|e-commerce|redesign|वेबसाइट/.test(normalized)) {
    return isHindi
      ? 'Hum business websites, e-commerce, web apps, redesign aur maintenance provide karte hain. Aapko nayi website chahiye ya existing website improve karni hai?'
      : 'We build business websites, e-commerce stores, web apps, and also provide redesign and maintenance. Do you need a new website or improvements to an existing one?'
  }

  if (/app|mobile|android|ios|मोबाइल|ऐप/.test(normalized)) {
    return isHindi
      ? 'Pixel Labs business requirements ke according mobile apps develop karta hai. Features aur platform share kar dein; detailed quote ke liye WhatsApp +91 7509955205 par contact kar sakte hain.'
      : 'Pixel Labs develops mobile apps around your business requirements. Share the main features and target platform, or contact us on WhatsApp at +91 7509955205 for a detailed quote.'
  }

  if (/hospital|school|erp|software|management|अस्पताल|स्कूल/.test(normalized)) {
    return isHindi
      ? 'Hum custom ERP, hospital management aur school management systems banate hain. System ko aapke workflow aur required modules ke according customize kiya ja sakta hai.'
      : 'We build custom ERP, hospital management, and school management systems. The modules can be tailored to your workflow and requirements.'
  }

  if (/seo|marketing|digital|rank|traffic/.test(normalized)) {
    return isHindi
      ? 'Pixel Labs SEO aur digital marketing services provide karta hai, jisse search visibility aur relevant traffic improve kiya ja sake. Aapki website already live hai?'
      : 'Pixel Labs provides SEO and digital marketing to improve search visibility and relevant traffic. Is your website already live?'
  }

  if (/contact|whatsapp|email|phone|number|सम्पर्क|संपर्क/.test(normalized)) {
    return isHindi
      ? 'Aap WhatsApp par +91 7509955205 ya email hello@pixellabs.in par Pixel Labs se contact kar sakte hain.'
      : 'You can contact Pixel Labs on WhatsApp at +91 7509955205 or email hello@pixellabs.in.'
  }

  if (/time|timing|hours|open|समय/.test(normalized)) {
    return isHindi
      ? 'Working hours Monday-Saturday 9 AM-7 PM aur Sunday 10 AM-4 PM hain.'
      : 'Our working hours are Monday-Saturday, 9 AM-7 PM, and Sunday, 10 AM-4 PM.'
  }

  return isHindi
    ? 'Pixel Labs web development, mobile apps, custom software/ERP, SEO, AI automation aur digital marketing mein help karta hai. Aap apni business requirement batayein, main suitable service suggest karunga.'
    : 'Pixel Labs can help with web development, mobile apps, custom software/ERP, SEO, AI automation, and digital marketing. Tell me your business requirement and I will suggest the right service.'
}

export default function PixelAI() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([INITIAL_MESSAGE])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => inputRef.current?.focus(), 260)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  async function handleSubmit(event) {
    event.preventDefault()

    const userText = input.trim()
    if (!userText || isTyping) return

    const userMessage = { role: 'user', text: userText }
    const nextMessages = [...messages, userMessage]

    setMessages(nextMessages)
    setInput('')
    setIsTyping(true)

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY
      if (!apiKey) {
        throw new Error('Gemini API key is not configured.')
      }

      const response = await fetch(
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-goog-api-key': apiKey,
          },
          body: JSON.stringify({
            systemInstruction: {
              parts: [{ text: SYSTEM_PROMPT }],
            },
            contents: nextMessages.slice(1).map((message) => ({
              role: message.role,
              parts: [{ text: message.text }],
            })),
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 300,
            },
          }),
        },
      )

      const data = await response.json()
      if (!response.ok) {
        throw new Error(data?.error?.message || 'Unable to reach Gemini.')
      }

      const reply = data?.candidates?.[0]?.content?.parts
        ?.map((part) => part.text)
        .filter(Boolean)
        .join('\n')

      if (!reply) {
        throw new Error('Gemini returned an empty response.')
      }

      setMessages((current) => [...current, { role: 'model', text: reply }])
    } catch (error) {
      console.error('Pixel AI request failed:', error)
      setMessages((current) => [
        ...current,
        {
          role: 'model',
          text: getFallbackResponse(userText),
        },
      ])
    } finally {
      setIsTyping(false)
    }
  }

  return (
    <div className="pai__root">
      <style>{styles}</style>

      <section
        className={`pai__window ${isOpen ? 'pai__window--open' : ''}`}
        aria-label="Pixel AI chat"
        aria-hidden={!isOpen}
      >
        <header className="pai__header">
          <div className="pai__avatar">
            <RobotIcon />
          </div>
          <div className="pai__heading">
            <h2 className="pai__title">Pixel AI</h2>
            <div className="pai__subtitle">
              <span className="pai__status" />
              Powered by Gemini
            </div>
          </div>
          <button
            className="pai__close"
            type="button"
            aria-label="Close Pixel AI chat"
            onClick={() => setIsOpen(false)}
          >
            <svg width="19" height="19" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="m6 6 12 12M18 6 6 18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </header>

        <div className="pai__messages" aria-live="polite">
          {messages.map((message, index) => (
            <div
              className={`pai__message pai__message--${message.role}`}
              key={`${message.role}-${index}`}
            >
              {message.text}
            </div>
          ))}

          {isTyping && (
            <div className="pai__typing" aria-label="Pixel AI is typing">
              <span className="pai__typing-dot" />
              <span className="pai__typing-dot" />
              <span className="pai__typing-dot" />
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form className="pai__form" onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            className="pai__input"
            type="text"
            value={input}
            placeholder="Ask Pixel AI..."
            aria-label="Message Pixel AI"
            autoComplete="off"
            disabled={isTyping}
            onChange={(event) => setInput(event.target.value)}
          />
          <button
            className="pai__send"
            type="submit"
            aria-label="Send message"
            disabled={!input.trim() || isTyping}
          >
            <svg width="19" height="19" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="m21 3-7.2 18-4.1-7.1L3 10.2 21 3Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <path
                d="m9.7 13.9 4.1-3.7"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </form>
      </section>

      <button
        className="pai__toggle"
        type="button"
        aria-label={isOpen ? 'Close Pixel AI chat' : 'Open Pixel AI chat'}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        <RobotIcon />
      </button>
      {!isOpen && (
        <div className="pai__tooltip" role="tooltip">
          Ask Pixel AI about our services
        </div>
      )}
    </div>
  )
}
