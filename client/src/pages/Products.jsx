import Footer from "../components/Footer";

export default function Products() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="rounded-2xl bg-white/60 backdrop-blur-md border border-white/30 p-8 shadow">
          <h1 className="text-3xl font-bold">Products & Kits</h1>
          <p className="mt-4 text-gray-700">
            We offer beginner and advanced robotics kits used in our classes—kits include controllers, sensors and step-by-step guides so students can continue learning at home.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
