"use client";

export function AnimatedBackground() {
  return (
    <>
      {/* Spline 3D background — fixed so it stays behind all content while scrolling */}
      <div className="fixed inset-0 -z-50 w-full h-full pointer-events-none">
        <iframe
          src="https://my.spline.design/glowingplanetparticles-nhVHji30IRoa5HBGe8yeDiTs"
          frameBorder="0"
          width="100%"
          height="100%"
          id="aura-spline"
          title="Animated background"
          className="w-full h-full"
        />
      </div>

      {/* Dark overlay so text stays readable over the bright Spline scene */}
      <div className="fixed inset-0 -z-40 bg-black/50 pointer-events-none" />
    </>
  );
}
