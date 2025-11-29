
const colorPalette = [
  "bg-red-100 text-red-800",
  "bg-green-100 text-green-800",
  "bg-blue-100 text-blue-800",
  "bg-yellow-100 text-yellow-800",
  "bg-purple-100 text-purple-800",
  "bg-pink-100 text-pink-800",
  "bg-indigo-100 text-indigo-800",
  "bg-teal-100 text-teal-800",
  "bg-orange-100 text-orange-800",
  "bg-cyan-100 text-cyan-800",
  "bg-lime-100 text-lime-800",
  "bg-emerald-100 text-emerald-800",
  "bg-rose-100 text-rose-800",
  "bg-violet-100 text-violet-800",
  "bg-fuchsia-100 text-fuchsia-800",
  "bg-amber-100 text-amber-800",
  "bg-sky-100 text-sky-800",
  "bg-slate-100 text-slate-800",
  "bg-neutral-100 text-neutral-800",
  "bg-stone-100 text-stone-800",
  "bg-zinc-100 text-zinc-800",
  "bg-blue-200 text-blue-900",
  "bg-green-200 text-green-900",
  "bg-red-200 text-red-900",
  "bg-violet-200 text-violet-900",
  "bg-orange-200 text-orange-900",
  "bg-rose-200 text-rose-900",
  "bg-teal-200 text-teal-900",
  "bg-indigo-200 text-indigo-900",
];


// 🔑 Generate color index from type string
const getCategoryColor = (type: string) => {
  let hash = 0;
  for (let i = 0; i < type.length; i++) {
    hash = type.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % colorPalette.length;
  return colorPalette[index];
};

export default getCategoryColor;