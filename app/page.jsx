export default function FunnelPlanesAhorro() {
  const whatsappNumber = '5493764000000'; // Reemplazar por tu número
  const whatsappMessage = encodeURIComponent(
    'Hola, vi la página de planes de ahorro y quiero recibir más información sobre los vehículos 0km.'
  );

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const vehicles = [
    {
      name: 'Peugeot 208',
      image:
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop',
      description:
        'Entrega pactada, financiación flexible y cuotas accesibles.',
    },
    {
      name: 'Fiat Cronos',
      image:
        'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop',
      description:
        'Uno de los sedanes más elegidos del país con financiación 100%.',
    },
    {
      name: 'Peugeot 2008',
      image:
        'https://images.unsplash.com/photo-1549924231-f129b911e442?q=80&w=1200&auto=format&fit=crop',
      description:
        'SUV moderna con entrega asegurada y toma de usados.',
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1600&auto=format&fit=crop')",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">
          <div className="inline-block bg-green-500 text-black px-4 py-2 rounded-full font-bold text-sm mb-6">
            PLANES DE AHORRO 0KM
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            TU 0KM MÁS CERCA
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Accedé a tu vehículo con financiación flexible, cuotas accesibles y asesoramiento personalizado.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href={whatsappLink}
              target="_blank"
              className="bg-green-500 hover:bg-green-400 transition-all text-black px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl"
            >
              SOLICITAR INFORMACIÓN
            </a>

            <a
              href="#vehiculos"
              className="border border-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-black transition-all"
            >
              VER VEHÍCULOS
            </a>
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800">
            <h3 className="text-2xl font-bold mb-4">Financiación Flexible</h3>
            <p className="text-gray-400">
              Opciones de financiación adaptadas a tu presupuesto y posibilidad de entrega pactada.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800">
            <h3 className="text-2xl font-bold mb-4">Tomamos tu Usado</h3>
            <p className="text-gray-400">
              Recibimos tu vehículo actual como parte de pago para facilitar el acceso al 0km.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800">
            <h3 className="text-2xl font-bold mb-4">Atención Personalizada</h3>
            <p className="text-gray-400">
              Te acompañamos durante todo el proceso para que tomes la mejor decisión.
            </p>
          </div>
        </div>
      </section>

      {/* VEHICULOS */}
      <section id="vehiculos" className="bg-zinc-950 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4">VEHÍCULOS DISPONIBLES</h2>
            <p className="text-gray-400 text-lg">
              Elegí el modelo ideal para vos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {vehicles.map((vehicle, index) => (
              <div
                key={index}
                className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:scale-105 transition-all duration-300"
              >
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="h-64 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-3xl font-bold mb-3">{vehicle.name}</h3>

                  <p className="text-gray-400 mb-6">{vehicle.description}</p>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    className="block text-center bg-green-500 hover:bg-green-400 text-black py-3 rounded-2xl font-bold transition-all"
                  >
                    CONSULTAR AHORA
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMULARIO */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 text-center">
          <h2 className="text-5xl font-black mb-6">
            RECIBÍ ASESORAMIENTO GRATIS
          </h2>

          <p className="text-gray-400 text-lg mb-10">
            Dejanos tus datos y un asesor se comunicará con vos.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Nombre y Apellido"
              className="bg-black border border-zinc-700 rounded-2xl px-5 py-4 text-white"
            />

            <input
              type="tel"
              placeholder="Teléfono"
              className="bg-black border border-zinc-700 rounded-2xl px-5 py-4 text-white"
            />
          </div>

          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full bg-black border border-zinc-700 rounded-2xl px-5 py-4 text-white mb-6"
          />

          <a
            href={whatsappLink}
            target="_blank"
            className="inline-block bg-green-500 hover:bg-green-400 text-black px-10 py-4 rounded-2xl font-black text-lg transition-all"
          >
            QUIERO MÁS INFORMACIÓN
          </a>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="bg-zinc-950 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-black mb-16">CLIENTES SATISFECHOS</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800">
              <p className="text-gray-300 mb-6">
                “Excelente atención y me ayudaron a acceder a mi primer 0km.”
              </p>
              <span className="font-bold">— Martín G.</span>
            </div>

            <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800">
              <p className="text-gray-300 mb-6">
                “Proceso rápido y transparente. Muy recomendable.”
              </p>
              <span className="font-bold">— Camila R.</span>
            </div>

            <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800">
              <p className="text-gray-300 mb-6">
                “Pude entregar mi usado y financiar el resto sin problemas.”
              </p>
              <span className="font-bold">— Diego A.</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-5xl md:text-6xl font-black mb-6">
          ¿LISTO PARA TU 0KM?
        </h2>

        <p className="text-gray-400 text-xl mb-10 max-w-2xl mx-auto">
          Hablá ahora con un asesor y descubrí las mejores opciones de financiación.
        </p>

        <a
          href={whatsappLink}
          target="_blank"
          className="bg-green-500 hover:bg-green-400 text-black px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-2xl"
        >
          HABLAR POR WHATSAPP
        </a>
      </section>
    </div>
  );
}

