export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500 text-lg font-bold text-white shadow-lg shadow-red-500/30">
        S
      </div>

      <div>
        <h1 className="text-xl font-bold tracking-tight text-white">
          SkillSwap
        </h1>

        <p className="text-xs text-zinc-400">Learn. Teach. Grow.</p>
      </div>
    </div>
  );
}
