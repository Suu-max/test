export default function Home() {
  return (
    <main className="page">
      <nav className="nav">
        <div className="logo">NOVA</div>
        <a href="#start" className="navLink">Почати</a>
      </nav>

      <section className="hero" id="start">
        <div className="badge">NEXT.JS 16</div>
        <h1>Створюй швидше.<br /><span>Думай сміливіше.</span></h1>
        <p>
          Мінімальний темний Landing page на Next.js з App Router,
          чистим JavaScript і звичайним CSS.
        </p>
        <div className="actions">
          <a href="#features" className="button primary">Дізнатися більше</a>
          <a href="#features" className="button secondary">Можливості →</a>
        </div>
      </section>

      <section className="features" id="features">
        <article className="card">
          <div className="icon">01</div>
          <h2>Швидко</h2>
          <p>Мінімальна структура без зайвих бібліотек та залежностей.</p>
        </article>
        <article className="card">
          <div className="icon">02</div>
          <h2>Просто</h2>
          <p>JavaScript, App Router і звичайний CSS — усе легко змінювати.</p>
        </article>
        <article className="card">
          <div className="icon">03</div>
          <h2>Сучасно</h2>
          <p>Темний дизайн, адаптивна верстка та актуальна структура Next.js.</p>
        </article>
      </section>

      <footer className="footer">
        <span>© 2026 NOVA</span>
        <span>Built with Next.js</span>
      </footer>
    </main>
  );
}
