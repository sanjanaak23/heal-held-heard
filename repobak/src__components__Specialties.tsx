import ScrollFadeUp from './ScrollFadeUp';

const specialties = [
  {
    title: 'Anxiety & Overthinking',
    description:
      'Find stillness in the noise. Calm your nervous system and quiet the endless what-ifs with evidence-based tools and a grounded, compassionate presence.',
    icon: (
      <svg className="w-12 h-12 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 10.5h.008v.008H9V10.5zm6 0h.008v.008H15V10.5z" />
      </svg>
    ),
  },
  {
    title: 'Trauma & EMDR',
    description:
      'Your past does not have to define your future. Together we’ll gently reprocess painful memories and restore your sense of safety, at your own pace.',
    icon: (
      <svg className="w-12 h-12 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-5m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
      </svg>
    ),
  },
  {
    title: 'Burnout & Perfectionism',
    description:
      'Reconnect with who you are beyond your accomplishments. Heal the exhaustion and self-criticism, and build a life that feels sustainable and meaningful.',
    icon: (
      <svg className="w-12 h-12 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v4.5" />
      </svg>
    ),
  },
];

export default function Specialties() {
  return (
    <section className="py-24 bg-neutral-50">
      <div className="container mx-auto px-4">
        <ScrollFadeUp>
          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-light text-center text-text mb-16">
            How I can support you
          </h2>
        </ScrollFadeUp>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((item, index) => (
            <ScrollFadeUp key={item.title}>
              <div
                className="
                  group relative
                  bg-white rounded-2xl p-8
                  shadow-md hover:shadow-xl
                  transition-all duration-300 ease-out
                  hover:-translate-y-2
                  flex flex-col items-start
                  border border-white/50
                "
              >
                {/* ICON with hover animation (float/rotate) */}
                <div
                  className="
                    mb-6 text-primary
                    transition-all duration-300 ease-out
                    group-hover:scale-110 group-hover:rotate-3
                  "
                >
                  {item.icon}
                </div>

                {/* TITLE – always visible */}
                <h3 className="font-sans text-2xl font-medium text-text mb-3">
                  {item.title}
                </h3>

                {/* DESCRIPTION – hidden by default, fades in on hover */}
                <p
                  className="
                    text-text-soft leading-relaxed
                    opacity-0 max-h-0
                    group-hover:opacity-100 group-hover:max-h-40
                    transition-all duration-500 ease-out
                    overflow-hidden
                  "
                >
                  {item.description}
                </p>

                {/* Subtle decorative line – appears on hover */}
                <span
                  className="
                    absolute bottom-6 left-8 right-8 h-0.5 bg-primary/20
                    scale-x-0 group-hover:scale-x-100
                    transition-transform duration-500 ease-out
                    origin-left
                  "
                />
              </div>
            </ScrollFadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}