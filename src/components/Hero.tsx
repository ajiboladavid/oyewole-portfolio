import { Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useRef } from 'react';

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * devicePixelRatio;
      canvas.height = canvas.offsetHeight * devicePixelRatio;
    };
    resize();

    const gl = canvas.getContext('webgl');
    if (!gl) return;

    const vert = `
      attribute vec2 a_pos;
      void main(){ gl_Position = vec4(a_pos,0,1); }
    `;

    const frag = `
      precision highp float;
      uniform vec2 u_res;
      uniform float u_time;
      uniform vec2 u_pts[28];

      void main(){
        vec2 uv = gl_FragCoord.xy / u_res;
        float d1=1e9, d2=1e9;
        int ci=0;
        for(int i=0;i<28;i++){
          float d = distance(uv, u_pts[i]);
          if(d<d1){d2=d1;d1=d;ci=i;}
          else if(d<d2){d2=d;}
        }
        float edge = smoothstep(0.0, 0.018, d2 - d1);
        float pulse = 0.5 + 0.5*sin(u_time*0.8 + float(ci)*0.7);

        vec3 bg = vec3(0.06, 0.09, 0.18);
        vec3 teal = vec3(0.18, 0.83, 0.75);
        vec3 cellTint = bg + vec3(0.02, 0.03, 0.08)*sin(float(ci)*1.3);

        float glow = (1.0 - edge) * 0.13 * pulse;
        vec3 col = bg + teal * glow;

        float vig = 1.0 - 0.4*length(uv - vec2(0.5));
        col *= vig;

        gl_FragColor = vec4(col, 1.0);
      }
    `;

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };

    const prog = gl.createProgram()!;
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, vert));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, frag));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,1,-1,-1,1,1,1]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, 'a_pos');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, 'u_res');
    const uTime = gl.getUniformLocation(prog, 'u_time');
    const uPts = gl.getUniformLocation(prog, 'u_pts');

    const seeds = Array.from({ length: 28 }, () => [Math.random(), Math.random()]);
    const vel = Array.from({ length: 28 }, () => [
      (Math.random() - 0.5) * 0.0003,
      (Math.random() - 0.5) * 0.0003,
    ]);

    let animFrame: number;

    const frame = (ms: number) => {
      const t = ms / 1000;
      seeds.forEach((p, i) => {
        p[0] += vel[i][0]; p[1] += vel[i][1];
        if (p[0] < 0 || p[0] > 1) vel[i][0] *= -1;
        if (p[1] < 0 || p[1] > 1) vel[i][1] *= -1;
      });
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, t);
      gl.uniform2fv(uPts, seeds.flat());
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animFrame = requestAnimationFrame(frame);
    };

    animFrame = requestAnimationFrame(frame);

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);

    return () => {
      cancelAnimationFrame(animFrame);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#0a1628]" />

      <div className="relative z-10 max-w-6xl w-full">
        <div className="flex flex-col md:flex-row items-center gap-10 animate-fade-in">

          <div className="flex flex-col items-center gap-2">
            <div className="flex-shrink-0 w-36 md:w-48 h-48 md:h-60 rounded-lg overflow-hidden border-2 border-teal-400 shadow-lg bg-teal-900 flex items-center justify-center">
              <img
                src="/profile.jpg"
                alt="Oyewole Ajibola"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const t = e.currentTarget;
                  t.style.display = 'none';
                  t.parentElement!.innerHTML = '<span class="text-5xl text-teal-500">OA</span>';
                }}
              />
            </div>
            <p className="text-lg font-medium text-teal-400 text-center">RN. RM. BNSc.</p>
          </div>

          <div className="text-center md:text-left space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight">
              OYEWOLE AJIBOLA
            </h1>
            <div className="flex flex-wrap justify-center md:justify-start gap-2 text-base md:text-xl text-teal-400 font-medium">
              <span>Registered Nurse</span>
              <span className="text-gray-400">|</span>
              <span>Research Analyst</span>
              <span className="text-gray-400">|</span>
              <span>ML Developer</span>
            </div>
            <p className="text-lg md:text-2xl text-gray-300 max-w-3xl leading-relaxed">
              Building at the intersection of healthcare and data.
            </p>
            <div className="flex justify-center md:justify-start gap-4 pt-4">
              <a href="mailto:oyewole8009@gmail.com" className="p-3 rounded-full bg-teal-900/30 text-teal-400 hover:bg-teal-900/50 transition-all duration-300 hover:scale-110" aria-label="Email">
                <Mail size={24} />
              </a>
              <a href="https://github.com/ajiboladavid" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-teal-900/30 text-teal-400 hover:bg-teal-900/50 transition-all duration-300 hover:scale-110" aria-label="GitHub">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/oyewole-ajibola-b459113a0" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-teal-900/30 text-teal-400 hover:bg-teal-900/50 transition-all duration-300 hover:scale-110" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}