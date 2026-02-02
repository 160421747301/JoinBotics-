import { motion } from "framer-motion";

export default function ProgramCard({ program }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl bg-white/60 backdrop-blur-md border border-white/30 p-6 shadow hover:shadow-lg transform hover:-translate-y-1 transition"
    >
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-[#c11e38] to-[#220b34] flex items-center justify-center text-white font-bold">{program.title.charAt(0)}</div>
        <div>
          <h3 className="text-lg font-semibold">{program.title}</h3>
          <p className="text-sm text-gray-600">Age: {program.age}</p>
        </div>
      </div>
      <p className="mt-4 text-gray-700">{program.desc}</p>
      <div className="mt-6 flex items-center justify-between">
        <a href="/contact" className="inline-block rounded-lg px-4 py-2 bg-gradient-to-r from-[#c11e38] to-[#220b34] text-white font-medium">Enroll</a>
        <a href="/programs" className="text-sm text-gray-600 hover:text-gray-800">Learn more →</a>
      </div>
    </motion.div>
  );
}
