import "./AIProducts.css";

function AIProducts() {
  return (
    <div className="ai-products-page">

      <section className="ai-products-hero">

        <div className="ai-products-container">

          <div className="ai-products-badge">
            AI • INNOVATION • INTELLIGENCE
          </div>

          <h1>
            AI Products
          </h1>

          <p className="ai-products-description">
            Empowering global businesses with HamaraShops.ai.
            We design and deliver production-ready AI products
            that automate complexity and unlock hidden growth.
          </p>

          <a
            href="#products"
            className="ai-products-button"
          >
            View All Products
          </a>

          {/* TRUSTED BY */}
          <div className="trusted-ai">

            <h3>
              Trusted by AI Research Teams
            </h3>

            <div className="ai-companies">

              <div className="ai-company">
                OpenAI
              </div>

              <div className="ai-company">
                Google AI
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* PRODUCTS */}
      <section
        id="products"
        className="ai-products-list"
      >

        <div className="ai-products-container">

          <div className="products-heading">

            <span>
              OUR SOLUTIONS
            </span>

            <h2>
              Production-Ready AI Solutions
            </h2>

            <p>
              Intelligent products designed to simplify complex
              business processes and accelerate growth.
            </p>

          </div>


          <div className="products-grid">

            <div className="product-card">

              <div className="product-icon">
                AI
              </div>

              <h3>
                AI Automation
              </h3>

              <p>
                Automate repetitive business workflows with
                intelligent AI-powered systems.
              </p>

            </div>


            <div className="product-card">

              <div className="product-icon">
                ML
              </div>

              <h3>
                Machine Learning
              </h3>

              <p>
                Transform business data into actionable insights
                using advanced machine learning technologies.
              </p>

            </div>


            <div className="product-card">

              <div className="product-icon">
                NLP
              </div>

              <h3>
                AI Language Solutions
              </h3>

              <p>
                Build intelligent language applications using
                modern natural language processing technologies.
              </p>

            </div>


            <div className="product-card">

              <div className="product-icon">
                RAG
              </div>

              <h3>
                RAG Solutions
              </h3>

              <p>
                Connect enterprise knowledge with AI to deliver
                accurate and context-aware responses.
              </p>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default AIProducts;