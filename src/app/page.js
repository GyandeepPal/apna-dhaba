const meals = [
  {
    name: "स्टैंडर्ड मील",
    price: "₹80",
    color: "red",
    items: [
      "दाल",
      "2 प्रकार की सब्जियाँ",
      "4 चपातियाँ",
      "उबले हुए चावल",
      "अचार / चटनी",
      "प्याज का सलाद",
    ],
  },
  {
    name: "प्रीमियम मील",
    price: "₹100",
    color: "green",
    items: [
      "दाल",
      "2 सब्जियाँ",
      "4 चपातियाँ",
      "उबले हुए चावल",
      "रायता",
      "पापड़",
      "अचार / चटनी",
      "ताजा सलाद",
    ],
  },
  {
    name: "एग्जीक्यूटिव मील",
    price: "₹120",
    color: "blue",
    items: [
      "दाल",
      "2 सब्जियाँ",
      "4 चपातियाँ",
      "उबले हुए चावल",
      "रायता",
      "पापड़",
      "अचार / चटनी",
      "ताजा सलाद",
      "मिठाई",
    ],
  },
];

const plans = [
  {
    name: "क्लासिक",
    lunch: "₹2,200",
    dinner: "₹4,000",
    items: [
      "दाल",
      "1 सब्जी (2 विकल्प)",
      "4 चपातियाँ",
      "सादे चावल / जीरा राइस",
      "अचार / चटनी",
      "ताजा सलाद",
    ],
  },
  {
    name: "प्रीमियम",
    lunch: "₹3,000",
    dinner: "₹5,500",
    items: [
      "दाल",
      "2 सब्जियाँ",
      "4 चपातियाँ",
      "सादे चावल / जीरा राइस",
      "रायता",
      "पापड़",
    ],
  },
];

const phone = "7987953005";

const whatsapp = `https://wa.me/91${phone}?text=${encodeURIComponent(
  "नमस्ते अपना ढाबा, मुझे Corporate Meal / Tiffin के बारे में जानकारी चाहिए।"
)}`;

export default function Home() {
  return (
    <main>
      {/* NAVBAR */}
      <header className="nav">
        <div className="nav-inner">

          <a href="#home" className="logo">
            <span>अ</span>

            <div>
              <b>अपना ढाबा</b>
              <small>Corporate Meals</small>
            </div>
          </a>

          <nav>
            <a href="#home">होम</a>
            <a href="#menu">मेन्यू</a>
            <a href="#plans">टिफिन</a>
            <a href="#about">हमारे बारे में</a>
            <a href="#contact">संपर्क</a>
          </nav>

          <div className="nav-actions">
            <a
              className="whatsapp mini"
              href={whatsapp}
              target="_blank"
            >
              WhatsApp
            </a>

            <a
              className="call mini"
              href={`tel:${phone}`}
            >
              📞 Call
            </a>
          </div>

        </div>
      </header>

      {/* HERO */}
      <section id="home" className="hero">

        <div className="hero-inner">

          <div className="hero-text">

            <div className="pill">
              🌿 100% शाकाहारी • घर जैसा स्वाद
            </div>

            <h1>
              स्वाद ऐसा कि
              <br />

              <em>हर कोई कहे,</em>

              <br />

              फिर से आना है!
            </h1>

            <p>
              ऑफिस, कॉर्पोरेट टीम और रोज़ाना टिफिन
              के लिए ताज़ा, साफ-सुथरा और भरपेट भोजन।
            </p>

            <div className="hero-buttons">

              <a
                className="gold-btn"
                href="#menu"
              >
                मेन्यू देखें ↓
              </a>

              <a
                className="outline-btn"
                href={whatsapp}
                target="_blank"
              >
                💬 WhatsApp पर पूछें
              </a>

            </div>

            <div className="trust">
              <span>✓ साफ-सफाई</span>
              <span>✓ शाकाहारी</span>
              <span>✓ Bulk Orders</span>
            </div>

          </div>

          {/* FOOD VISUAL */}
          <div className="dish">

            <div className="dish-ring">

              <div className="dish-food">
                🍛
              </div>

            </div>

            <div className="floating f1">
              🥗 ताजा सलाद
            </div>

            <div className="floating f2">
              🫓 गरम रोटी
            </div>

            <div className="dish-caption">
              <b>Corporate Meals</b>
              <span>₹80 से शुरू</span>
            </div>

          </div>

        </div>

      </section>

      {/* QUICK INFO */}
      <section className="quick">

        <div>
          <strong>🍱 3 Meal Options</strong>
          <span>Standard से Executive तक</span>
        </div>

        <div>
          <strong>👥 Minimum 10 Meals</strong>
          <span>Corporate & bulk orders</span>
        </div>

        <div>
          <strong>📞 7987953005</strong>
          <span>Order / Enquiry</span>
        </div>

      </section>

      {/* MENU */}
      <section id="menu" className="section">

        <div className="heading">

          <label>हमारा मेन्यू</label>

          <h2>
            Corporate Meal Plans
          </h2>

          <p>
            अपनी जरूरत के हिसाब से अपना मील चुनिए।
          </p>

        </div>

        <div className="meal-grid">

          {meals.map((meal) => (

            <article
              className={`meal ${meal.color}`}
              key={meal.name}
            >

              <div className="meal-top">

                <div>
                  <h3>{meal.name}</h3>
                  <small>Corporate Meal</small>
                </div>

                <strong>
                  {meal.price}
                  <small> + GST</small>
                </strong>

              </div>

              <div className="meal-photo">
                🍛
              </div>

              <ul>

                {meal.items.map((item) => (
                  <li key={item}>
                    ✓ {item}
                  </li>
                ))}

              </ul>

              <a
                href={whatsapp}
                target="_blank"
              >
                WhatsApp से Order करें →
              </a>

            </article>

          ))}

        </div>

      </section>

      {/* MONTHLY PLANS */}
      <section id="plans" className="plans">

        <div className="heading">

          <label>
            मासिक टिफिन प्लान
          </label>

          <h2>
            Monthly Tiffin Plans
          </h2>

          <p>
            पूरे महीने का आसान, स्वादिष्ट और भरोसेमंद खाना।
          </p>

        </div>

        <div className="plan-grid">

          {plans.map((plan) => (

            <article
              className="plan"
              key={plan.name}
            >

              <div className="plan-head">

                <h3>
                  {plan.name} प्लान
                </h3>

                <span>
                  Monthly Tiffin
                </span>

              </div>

              <div className="plan-price">

                <div>
                  <small>केवल लंच</small>
                  <b>{plan.lunch}</b>
                </div>

                <div>
                  <small>लंच और डिनर</small>
                  <b>{plan.dinner}</b>
                </div>

              </div>

              <ul>

                {plan.items.map((item) => (
                  <li key={item}>
                    ✓ {item}
                  </li>
                ))}

              </ul>

              <a
                href={whatsapp}
                target="_blank"
              >
                प्लान बुक करें
              </a>

            </article>

          ))}

        </div>

      </section>

      {/* ABOUT */}
      <section id="about" className="about">

        <div className="about-img">

          <img
            src="/menu-poster.jpg"
            alt="Apna Dhaba menu"
          />

        </div>

        <div>

          <label>
            अपना ढाबा
          </label>

          <h2>
            खाना सिर्फ पेट नहीं,
            भरोसा भी भरता है।
          </h2>

          <p>
            हमारा फोकस साफ-सुथरे, शाकाहारी और
            घर जैसे स्वाद वाले भोजन पर है।
            Corporate teams, offices और monthly
            tiffin customers के लिए आसान meal plans
            उपलब्ध हैं।
          </p>

          <div className="about-points">

            <span>🌿 ताज़ी सामग्री</span>

            <span>🧼 स्वच्छ रसोई</span>

            <span>🍱 समय पर Meal</span>

            <span>🤝 Bulk Orders</span>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="cta">

        <div>

          <label>
            आज ही ऑर्डर करें
          </label>

          <h2>
            आपका खाना,
            हमारी जिम्मेदारी ❤️
          </h2>

          <p>
            Corporate orders, monthly tiffin
            और bulk meals के लिए सीधे संपर्क करें।
          </p>

        </div>

        <div className="cta-buttons">

          <a
            className="gold-btn"
            href={`tel:${phone}`}
          >
            📞 {phone}
          </a>

          <a
            className="whatsapp"
            href={whatsapp}
            target="_blank"
          >
            💬 WhatsApp Order
          </a>

        </div>

      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">

        <div>

          <label>
            हमसे मिलिए
          </label>

          <h2>
            Location & Contact
          </h2>

          <p>
            📍 अंधमुख बायपास, जबलपुर
          </p>

          <p>
            📞{" "}
            <a href={`tel:${phone}`}>
              {phone}
            </a>
          </p>

        </div>

        <div className="map-card">

          <span>📍</span>

          <b>
            अंधमुख बायपास
          </b>

          <small>
            Jabalpur, Madhya Pradesh
          </small>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Andhmukh+Bypass+Jabalpur"
            target="_blank"
          >
            Google Maps पर खोलें ↗
          </a>

        </div>

      </section>

      {/* FOOTER */}
      <footer>

        <div className="footer-logo">
          अपना ढाबा
        </div>

        <p>
          स्वाद ऐसा कि हर कोई कहे,
          फिर से आना है!
        </p>

        <small>
          © 2026 Apna Dhaba • Corporate Meals & Tiffin
          {" "}Apna Dhaba • Corporate Meals & Tiffin
        </small>

      </footer>

    </main>
  );
}