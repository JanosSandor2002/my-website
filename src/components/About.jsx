import React from 'react';

/* ── Segédkomponensek ── */
const Section = ({ title, children }) => (
  <div className='about-section'>
    <h3 className='about-section-title'>{title}</h3>
    {children}
  </div>
);

const Box = ({ emoji, title, children, accent }) => (
  <div className={`about-box${accent ? ' about-box-accent' : ''}`}>
    <div className='about-box-header'>
      <span className='about-box-emoji'>{emoji}</span>
      <span className='about-box-title'>{title}</span>
    </div>
    <p className='about-box-body'>{children}</p>
  </div>
);

const Tag = ({ children }) => (
  <span className='about-tag'>{children}</span>
);

const About = () => {
  return (
    <div className='about' id='rolam'>

      {/* ── Bevezető ── */}
      <div className='about-hero'>
        <p className='about-hero-label'>Rólam</p>
        <h1>Sándor János</h1>
        <p className='about-hero-sub'>
          Programtervező informatikus hallgató · Webfejlesztő · Tanár jelölt · Röpis
        </p>
      </div>

      {/* ── Ki vagyok ── */}
      <Section title='Ki vagyok?'>
        <div className='about-intro-grid'>
          <p>
            A Miskolci Egyetem Informatikai Karának harmadéves hallgatója vagyok.
            Vonz a programozás alkotói oldala — az, hogy kódból nulláról lehet
            felépíteni és optimalizálni megoldásokat. A logikus gondolkodást
            képzelőerővel párosítom, és szívesen keresem az innovatív megközelítéseket.
          </p>
          <p>
            Az egyetemi tanulmányaim mellett aktívan fejlesztem magam webfejlesztésben,
            játékfejlesztésben és pedagógiában egyaránt. Erősen hiszem, hogy a formális
            oktatás és az önvezérelt tanulás kombinációja elengedhetetlen a gyorsan
            változó informatika területén.
          </p>
        </div>
      </Section>

      {/* ── Amit szeretek csinálni ── */}
      <Section title='Amit szeretek csinálni'>
        <div className='about-box-grid'>
          <Box emoji='💻' title='Webfejlesztés' accent>
            Elsősorban React ökoszisztémában dolgozom — felhasználóbarát, letisztult
            felületeket tervezek és implementálok. A frontend-élmény és a kódminőség
            egyaránt fontos számomra.
          </Box>
          <Box emoji='🎮' title='Játékfejlesztés'>
            Godot Engine-ben 2D játékokat fejlesztek szabadidőmben. A játékmechanikák
            tervezése és az interaktív rendszerek implementálása rendkívül kielégítő —
            még ha keveset is gamelek magam.
          </Box>
          <Box emoji='🎓' title='Tanítás és korrepetálás'>
            Szeretem átadni a tudást. Jelenleg korrepetálás szintjén oktatom az
            informatikát és a matematikát — a cél az MSc után rendes tanárként is
            dolgozni, osztályteremben.
          </Box>
        </div>
      </Section>

      {/* ── Sport ── */}
      <Section title='Sport'>
        <div className='about-box-grid about-box-grid-2'>
          <Box emoji='🏐' title='Röplabda — szenvedélyem' accent>
            Sokat röpizek: az egyetemi csapatban rendszeresen edzek és versenyeken
            indulok, emellett egy amatőr röpicsapatban is játszom. Ez az a sport,
            amelybe igazán beleástam magam — csapatjáték, dinamika, kommunikáció.
          </Box>
          <Box emoji='🏃' title='Aktív életmód'>
            A röplabdán kívül általában igyekszem mozgásban maradni. A sport fontos
            egyensúlyt jelent a sok képernyő előtt töltött idő mellett.
          </Box>
        </div>
      </Section>

      {/* ── Macskák ── */}
      <Section title='Állatszeretet'>
        <div className='about-cats-card'>
          <div className='about-cats-emoji'>🐱</div>
          <div>
            <div className='about-cats-count'>× 7</div>
            <p>
              Nagy állatszerető vagyok — jelenleg <strong>7 macskával</strong> élek együtt.
              Mindegyiknek megvan a maga egyénisége és karaktere, és őszintén szólva
              ők adják a legjobb társaságot egy hosszú fejlesztési munkamenet után.
            </p>
          </div>
        </div>
      </Section>

      {/* ── Szórakozás / tartalmak ── */}
      <Section title='Amit fogyasztok'>
        <div className='about-box-grid'>
          <Box emoji='🎬' title='Filmek és sorozatok'>
            Elsősorban horror, thriller és akciófilmeket nézek — mindkét műfajban
            szívesen elmerülök, akár filmen, akár sorozatban. A feszültség és az
            atmoszféra a fontos.
          </Box>
          <Box emoji='🎮' title='Játékok (alkalmanként)'>
            Habár keveset gamelek, ha mégis, akkor szintén a horror és az akció
            műfaja a kedvencem. A játékfejlesztési tapasztalat más szemmel nézeti
            velem a jól megcsinált játékokat.
          </Box>
          <Box emoji='☕' title='Kávé és utazás'>
            Időnként szeretek kiülni valahova egy kávéra, kilépni a napi rutinból.
            Alkalmanként utazom is — egy-egy rövidebb kirándulás mindig felfrissít.
          </Box>
        </div>
      </Section>

      {/* ── Rendszer / eszközök ── */}
      <Section title='Fejlesztői környezet'>
        <div className='about-env-card'>
          <div className='about-env-icon'>🐧</div>
          <div className='about-env-content'>
            <div className='about-env-title'>NixOS Linux</div>
            <p className='about-env-desc'>
              Napi rendszerként NixOS-t használok — a deklaratív rendszerkonfiguráció
              és a reprodukálható build környezet nagyon megfelel a fejlesztési
              munkamódszeremnek.
            </p>
            <div className='about-env-tags'>
              <Tag>NixOS</Tag>
              <Tag>Linux</Tag>
              <Tag>Terminal</Tag>
              <Tag>Git</Tag>
              <Tag>VS Code</Tag>
            </div>
          </div>
        </div>
      </Section>

    </div>
  );
};

export default About;