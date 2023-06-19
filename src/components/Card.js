export function CardMateria({ id, name, assunto, ...props }) {
  return (
    <div className="">
      <a
        // href={`../materia/${id}/`}
        href="#"
        className="group relative block rounded-3xl border-4 border-black bg-white pt-12 transition hover:bg-yellow-50 sm:pt-16 lg:pt-24"
      >
        <span className="absolute inset-0 -z-10 -translate-x-2 -translate-y-2 rounded-3xl bg-white ring-4 ring-black"></span>

        <span className="absolute inset-0 -z-20 -translate-x-4 -translate-y-4 rounded-3xl bg-white ring-4 ring-black"></span>

        <div className="p-4 sm:p-6 lg:p-8">
          <p className="text-lg font-bold text-[#002B36]">{name}</p>

          <p className="mt-1 font-mono text-xs text-[#073642]">{assunto}</p>
        </div>
      </a>
    </div>
  );
}
