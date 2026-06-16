import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import svgPaths from "../../imports/Layer2/svg-6t58h8pn59";

function SchedulaLogo({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size * (275.501 / 204)} viewBox="0 0 204 275.501" fill="none" className="block flex-shrink-0">
      <path d={svgPaths.p34c9b600} fill="url(#logo_g1)" />
      <path d={svgPaths.p56e0400} fill="url(#logo_g2)" />
      <path d={svgPaths.p1ca49500} fill="url(#logo_g3)" />
      <defs>
        <linearGradient gradientUnits="userSpaceOnUse" id="logo_g1" x1="177.058" x2="46.9074" y1="157.132" y2="25.6516">
          <stop offset="0.06" stopColor="#DCFFF2" />
          <stop offset="0.55" stopColor="#71FFC8" />
          <stop offset="1" stopColor="#6CBDFF" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="logo_g2" x1="45.4636" x2="175.614" y1="118.369" y2="249.849">
          <stop offset="0.06" stopColor="#DCFFF2" />
          <stop offset="0.55" stopColor="#71FFC8" />
          <stop offset="1" stopColor="#6CBDFF" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="logo_g3" x1="7.56558" x2="43.7262" y1="170.03" y2="206.56">
          <stop offset="0.06" stopColor="#DCFFF2" />
          <stop offset="0.55" stopColor="#71FFC8" />
          <stop offset="1" stopColor="#6CBDFF" />
        </linearGradient>
      </defs>
    </svg>
  );
}
import {
  Calendar, Sparkles, Users, BarChart3, MessageSquare, Bell, ShieldCheck,
  Download, QrCode, X, Star, Check, ArrowRight, Play, Apple, Smartphone,
  Clock, TrendingUp, Heart, Zap, Award, ChevronDown,
} from "lucide-react";

const APP_URL = "https://pub-11955fd9a61746ba8f0108c9118b7fae.r2.dev/app-prod-release.apk";
const QR_SRC = `https://api.qrserver.com/v1/create-qr-code/?size=320x320&margin=8&data=${encodeURIComponent(APP_URL)}&color=148a9c&bgcolor=ffffff&qzone=1`;

export function Landing() {   
  const [qrOpen, setQrOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: "#f0f9fa", fontFamily: "'Raleway', sans-serif" }}>
      {/* HERO */}
      <section className="relative pt-12 pb-32 px-8 overflow-hidden">
        <BackgroundBlobs />
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-16 items-center relative z-10">
          <div>
            {/* Logo inline above heading */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-7">
              <SchedulaLogo size={44} />
              <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: 26, color: "#101828", letterSpacing: "-0.02em" }}>Schedula</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-900"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: 64, lineHeight: 1.05, letterSpacing: "-0.03em" }}>
              Trợ thủ <span style={{ background: "linear-gradient(135deg, #22AFC2, #148a9c)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>quản lý spa</span> trong tầm tay
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 mt-5"
              style={{ fontSize: 18, lineHeight: 1.6 }}>
              Schedula là ứng dụng dành cho chủ spa, clinic, salon: tự động hoá lịch hẹn, theo dõi khách hàng, phát hiện xung đột bằng AI và xem doanh thu chỉ trong một cú chạm.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8">
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                onClick={() => setQrOpen(true)}
                className="px-7 py-4 rounded-2xl text-white flex items-center gap-3 shadow-lg"
                style={{ background: "linear-gradient(135deg, #22AFC2, #148a9c)", boxShadow: "0 10px 30px rgba(20,138,156,0.35)" }}>
                <QrCode size={20} />
                <div className="text-left">
                  <p className="text-[11px] opacity-80 leading-tight">Quét mã QR</p>
                  <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: 15, lineHeight: 1.1 }}>Tải Schedula miễn phí</p>
                </div>
              </motion.button>
            </motion.div>
          </div>

          <HeroPhone />
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400">
          <span className="text-xs">Cuộn xuống để khám phá</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ChevronDown size={18} />
          </motion.div>
        </motion.div>
      </section>



      <SectionFeature
        eyebrow="LỊCH HẸN THÔNG MINH"
        title="Mọi cuộc hẹn — gọn trong lòng bàn tay"
        body="Tạo và quản lý lịch hẹn chỉ trong vài giây. AI tự phát hiện trùng giờ, đề xuất khung trống tốt nhất và gửi nhắc nhở khách hàng tự động qua SMS/Zalo."
        reverse={false}
        visual={<AppointmentDemo />}
        accent="#148a9c"
      />

      <SectionFeature
        eyebrow="TRỢ LÝ AI"
        title="AI giúp bạn vận hành mỗi ngày"
        body="Schedula AI đọc tin nhắn, ảnh chụp đơn đặt lịch và tự tạo cuộc hẹn. Tóm tắt doanh thu, gợi ý chương trình khuyến mãi cho khung giờ thấp điểm."
        reverse={true}
        visual={<AiChatDemo />}
        accent="#8b5cf6"
      />

      <SectionFeature
        eyebrow="QUẢN LÝ KHÁCH HÀNG"
        title="Hiểu khách hàng như chính bạn"
        body="Lịch sử, sở thích, dịch vụ yêu thích — tất cả ở một nơi. Trạng thái khách (Mới / Tích cực / Cần tái khám / Đang phục hồi) cập nhật tự động theo lịch hẹn."
        reverse={false}
        visual={<CustomerDemo />}
        accent="#16a34a"
      />

      <SectionFeature
        eyebrow="THỐNG KÊ TRỰC QUAN"
        title="Số liệu kể câu chuyện kinh doanh"
        body="Doanh thu, khung giờ đông khách, tỉ lệ giữ chân, hiệu suất nhân viên — tất cả hiển thị dưới dạng biểu đồ rõ ràng, lọc theo Hôm nay/Tuần/Tháng/Năm."
        reverse={true}
        visual={<StatsDemo />}
        accent="#f97316"
      />

      <FeatureGrid />
      <HowItWorks />
      <FinalCTA />
      <Footer />

      <AnimatePresence>
        {qrOpen && <QrModal onClose={() => setQrOpen(false)} />}
      </AnimatePresence>
    </div>
  );
}

/* ───────────────────────────────────── TOP LOGO ───────────────────────────────────── */
function TopLogo() {
  return (
    <div className="pt-8 px-8">
      <div className="max-w-7xl mx-auto flex items-center gap-3">
        <SchedulaLogo size={38} />
        <span className="text-gray-900" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: 24, letterSpacing: "-0.02em" }}>Schedula</span>
      </div>
    </div>
  );
}

/* ───────────────────────────────────── NAVBAR (unused) ───────────────────────────────────── */
function Navbar({ onDownload }: { onDownload: () => void }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-white/70 border-b border-white/40">
      <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #22AFC2, #148a9c)" }}>
            <Calendar size={18} className="text-white" />
          </div>
          <span className="text-gray-900" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: 20 }}>Schedula</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          {["Tính năng", "Giải pháp", "Bảng giá", "Hỗ trợ"].map((l) => (
            <a key={l} href="#" className="hover:text-gray-900 transition-colors" style={{ fontWeight: 500 }}>{l}</a>
          ))}
        </nav>
        <button onClick={onDownload}
          className="px-5 py-2.5 rounded-xl text-white flex items-center gap-2 shadow-md hover:shadow-lg transition-shadow"
          style={{ background: "linear-gradient(135deg, #22AFC2, #148a9c)" }}>
          <Download size={14} />
          <span style={{ fontWeight: 700, fontSize: 13 }}>Tải ứng dụng</span>
        </button>
      </div>
    </header>
  );
}

/* ───────────────────────────────────── HERO ELEMENTS ───────────────────────────────────── */
function BackgroundBlobs() {
  return (
    <>
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-30"
        style={{ background: "radial-gradient(circle, #22AFC2 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], rotate: [0, -20, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 right-0 w-[500px] h-[500px] rounded-full opacity-25"
        style={{ background: "radial-gradient(circle, #58d8e3 0%, transparent 70%)" }}
      />
    </>
  );
}

function HeroPhone() {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.9, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
      className="relative h-[600px] flex items-center justify-center">
      {/* Phone */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10"
      >
        <div className="w-[280px] h-[560px] rounded-[40px] bg-gray-900 p-2 shadow-2xl" style={{ boxShadow: "0 40px 80px rgba(20,138,156,0.3)" }}>
          <div className="w-full h-full rounded-[34px] overflow-hidden relative" style={{ background: "linear-gradient(180deg, #f0f9fa, #ffffff)" }}>
            {/* notch */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-5 bg-gray-900 rounded-full z-20" />
            {/* App preview */}
            <div className="pt-10 px-5">
              <div className="rounded-2xl p-4 text-white" style={{ background: "linear-gradient(135deg, #22AFC2, #148a9c)" }}>
                <p className="text-[10px] opacity-80">Xin chào, Minh!</p>
                <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: 17 }}>Hôm nay có 32 lịch</p>
                <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                  {[["27", "Xong"], ["3", "Chờ"], ["2", "Huỷ"]].map(([v, l]) => (
                    <div key={l} className="bg-white/15 rounded-xl py-1.5">
                      <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: 16 }}>{v}</p>
                      <p className="text-[9px] opacity-80">{l}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-3 space-y-2">
                {[
                  { t: "14:30", n: "Phạm Linh", s: "Triệt lông", c: "#16a34a" },
                  { t: "15:00", n: "Lê Hoa", s: "Tẩy trang", c: "#f97316" },
                  { t: "16:00", n: "Vũ Thanh", s: "Chăm sóc da", c: "#148a9c" },
                ].map((a) => (
                  <div key={a.t} className="bg-white rounded-xl p-2.5 shadow-sm flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center text-white text-[10px]" style={{ background: a.c }}>{a.t.split(":")[0]}h</div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] text-gray-900 truncate" style={{ fontWeight: 700 }}>{a.n}</p>
                      <p className="text-[9px] text-gray-500 truncate">{a.s}</p>
                    </div>
                    <span className="text-[8px] text-gray-400">{a.t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating cards */}
      <motion.div
        animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-16 -left-4 bg-white rounded-2xl shadow-xl p-3 flex items-center gap-2.5 z-20"
        style={{ boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
      >
        <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #22AFC2, #148a9c)" }}>
          <Sparkles size={15} className="text-white" />
        </div>
        <div>
          <p className="text-[10px] text-gray-500">AI phát hiện</p>
          <p className="text-xs text-gray-900" style={{ fontWeight: 700 }}>Trùng lịch 15:00</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-32 -right-2 bg-white rounded-2xl shadow-xl p-3 z-20"
        style={{ boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
      >
        <div className="flex items-center gap-2 mb-1">
          <TrendingUp size={12} style={{ color: "#16a34a" }} />
          <p className="text-[10px] text-gray-500">Doanh thu tuần</p>
        </div>
        <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: 18, color: "#148a9c" }}>+18%</p>
      </motion.div>

      <motion.div
        animate={{ rotate: [0, 5, 0], y: [0, 6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 -right-8 bg-white rounded-full shadow-xl p-3 z-20"
      >
        <Bell size={18} style={{ color: "#f97316" }} />
      </motion.div>
    </motion.div>
  );
}

/* ───────────────────────────────────── STATS ───────────────────────────────────── */
function StatsBar() {
  const stats = [
    { v: "10,000+", l: "Spa & clinic tin dùng", icon: Heart },
    { v: "500,000+", l: "Lịch hẹn xử lý / tháng", icon: Calendar },
    { v: "2.5 triệu", l: "Khách hàng được quản lý", icon: Users },
    { v: "4.9 ★", l: "Đánh giá trên App Store", icon: Star },
  ];
  return (
    <section className="py-12 px-8 relative z-10">
      <div className="max-w-7xl mx-auto rounded-3xl p-8 text-white relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #22AFC2, #148a9c)", boxShadow: "0 30px 60px rgba(20,138,156,0.25)" }}>
        <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-white/10" />
        <div className="absolute -bottom-20 -left-12 w-72 h-72 rounded-full bg-white/5" />
        <div className="relative grid grid-cols-4 gap-8">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div key={s.l} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Icon size={22} className="opacity-70 mb-3" />
                <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: 34, lineHeight: 1 }}>{s.v}</p>
                <p className="text-sm opacity-80 mt-1.5">{s.l}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────── FEATURE SECTION ───────────────────────────────────── */
function SectionFeature({ eyebrow, title, body, reverse, visual, accent }: { eyebrow: string; title: string; body: string; reverse: boolean; visual: React.ReactNode; accent: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  return (
    <section ref={ref} className="py-24 px-8">
      <div className={`max-w-7xl mx-auto grid grid-cols-2 gap-20 items-center ${reverse ? "[direction:rtl]" : ""}`}>
        <motion.div
          initial={{ opacity: 0, x: reverse ? 60 : -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ direction: "ltr" }}
        >
          <p className="text-xs tracking-widest mb-3" style={{ color: accent, fontWeight: 700, letterSpacing: "0.15em" }}>{eyebrow}</p>
          <h2 className="text-gray-900 mb-5" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: 44, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            {title}
          </h2>
          <p className="text-gray-600" style={{ fontSize: 17, lineHeight: 1.6 }}>{body}</p>
          <div className="mt-6 space-y-2.5">
            {["Thiết lập trong 3 phút", "Đồng bộ thời gian thực mọi thiết bị", "Bảo mật cấp ngân hàng"].map((p) => (
              <div key={p} className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ background: accent + "20" }}>
                  <Check size={11} style={{ color: accent }} />
                </div>
                <p className="text-sm text-gray-700">{p}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          whileHover={{ scale: 1.03, y: -8, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
          style={{ direction: "ltr", cursor: "default" }}
          className="relative h-[420px] flex items-center justify-center"
        >
          {visual}
        </motion.div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────── DEMO VISUALS ───────────────────────────────────── */
function DemoFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-6 relative" style={{ boxShadow: "0 30px 70px rgba(0,0,0,0.12)" }}>
      {children}
    </div>
  );
}

function AppointmentDemo() {
  return (
    <DemoFrame>
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-[11px] text-gray-400">Hôm nay · Thứ 5</p>
          <p className="text-gray-900" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: 18 }}>Lịch hẹn</p>
        </div>
        <span className="text-[11px] px-2 py-1 rounded-full bg-[#e0f8fc]" style={{ color: "#148a9c", fontWeight: 700 }}>5 lịch sắp tới</span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
        className="rounded-2xl p-3 mb-3"
        style={{ background: "linear-gradient(135deg, #fff7ed, #ffedd5)", border: "1px solid #fdba74" }}
      >
        <div className="flex items-start gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
            <Sparkles size={14} className="text-orange-500" />
          </div>
          <div>
            <p className="text-xs text-orange-900" style={{ fontWeight: 700 }}>AI phát hiện xung đột</p>
            <p className="text-[11px] text-orange-700 mt-0.5">Nhân viên Lan trùng giờ 15:00. Đề xuất chuyển sang Ngọc.</p>
          </div>
        </div>
      </motion.div>

      <div className="space-y-2">
        {[
          { t: "14:30", n: "Phạm Linh", s: "Triệt lông · Ngọc", c: "#16a34a", st: "Check-in" },
          { t: "15:00", n: "Lê Hoa", s: "Phun xăm · Lan", c: "#f97316", st: "Chờ" },
          { t: "16:00", n: "Vũ Thanh", s: "Chăm sóc da · Hương", c: "#148a9c", st: "Xác nhận" },
        ].map((a, i) => (
          <motion.div key={a.t}
            initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.1 }}
            className="flex items-center gap-3 p-2.5 rounded-xl bg-gray-50">
            <div className="w-12 text-center">
              <p className="text-xs text-gray-400">Giờ</p>
              <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: 14, color: "#148a9c" }}>{a.t}</p>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-900 truncate" style={{ fontWeight: 700 }}>{a.n}</p>
              <p className="text-[11px] text-gray-500 truncate">{a.s}</p>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded-full" style={{ background: a.c + "20", color: a.c, fontWeight: 700 }}>{a.st}</span>
          </motion.div>
        ))}
      </div>
    </DemoFrame>
  );
}

function AiChatDemo() {
  return (
    <DemoFrame>
      <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #8b5cf6, #6d28d9)" }}>
          <Sparkles size={16} className="text-white" />
        </div>
        <div>
          <p className="text-gray-900" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: 15 }}>Schedula AI</p>
          <p className="text-[11px] text-gray-400">● Trực tuyến</p>
        </div>
      </div>

      <div className="space-y-3">
        {[
          { r: "user", t: "Tạo lịch cho chị Mai 17h chiều mai" },
          { r: "ai", t: "Đã tạo lịch cho Nguyễn Thị Mai vào 17:00 ngày 12/06 với Lan. AI đã tự nhận chuyên môn 'Chăm sóc da'." },
          { r: "user", t: "Doanh thu tuần này thế nào?" },
        ].map((m, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.15 }}
            className={`max-w-[80%] p-3 rounded-2xl text-sm ${m.r === "user" ? "ml-auto text-white" : ""}`}
            style={{
              background: m.r === "user" ? "linear-gradient(135deg, #8b5cf6, #6d28d9)" : "#f0f9fa",
              color: m.r === "user" ? "white" : "#1f2937",
              borderTopRightRadius: m.r === "user" ? 4 : 16,
              borderTopLeftRadius: m.r === "ai" ? 4 : 16,
            }}>
            {m.t}
          </motion.div>
        ))}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.8 }}
          className="flex items-center gap-1.5 ml-1">
          <div className="flex items-center gap-1 p-2.5 bg-[#f0f9fa] rounded-2xl rounded-tl-sm">
            {[0, 1, 2].map((i) => (
              <motion.span key={i} animate={{ y: [0, -3, 0] }} transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
                className="w-1.5 h-1.5 rounded-full" style={{ background: "#8b5cf6" }} />
            ))}
          </div>
        </motion.div>
      </div>
    </DemoFrame>
  );
}

function CustomerDemo() {
  const cs = [
    { n: "Nguyễn Thị Mai", v: 24, st: "Tích cực", c: "#16a34a" },
    { n: "Phạm Linh", v: 7, st: "Cần tái khám", c: "#f97316" },
    { n: "Đỗ Phương", v: 12, st: "Đang phục hồi", c: "#8b5cf6" },
    { n: "Lê Hoa", v: 1, st: "Mới", c: "#22AFC2" },
  ];
  return (
    <DemoFrame>
      <p className="text-gray-900 mb-4" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: 18 }}>Khách hàng</p>
      <div className="space-y-2.5">
        {cs.map((c, i) => (
          <motion.div key={c.n}
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.1 }}
            className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white" style={{ background: "linear-gradient(135deg, #22AFC2, #148a9c)", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700 }}>
              {c.n.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-900 truncate" style={{ fontWeight: 700 }}>{c.n}</p>
              <p className="text-[11px] text-gray-500">{c.v} lượt</p>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded-full" style={{ background: c.c + "20", color: c.c, fontWeight: 700 }}>{c.st}</span>
          </motion.div>
        ))}
      </div>
    </DemoFrame>
  );
}

function StatsDemo() {
  const bars = [3, 5, 4, 6, 8, 11, 14, 13, 9];
  const max = Math.max(...bars);
  return (
    <DemoFrame>
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-[11px] text-gray-400">Doanh thu tháng</p>
          <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: 26, color: "#148a9c" }}>245.8M ₫</p>
        </div>
        <span className="text-[11px] px-2 py-1 rounded-full bg-green-50 text-green-700 flex items-center gap-1" style={{ fontWeight: 700 }}>
          <TrendingUp size={11} /> +18%
        </span>
      </div>
      <p className="text-[11px] text-gray-500 mb-2">Khung giờ đông khách</p>
      <div className="flex items-end gap-1.5 h-32 mb-4">
        {bars.map((v, i) => (
          <motion.div key={i}
            initial={{ height: 0 }} whileInView={{ height: `${(v / max) * 100}%` }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.05, duration: 0.6 }}
            className="flex-1 rounded-t-md"
            style={{ background: v === max ? "linear-gradient(180deg, #f97316, #ea580c)" : "#fed7aa", minHeight: 6 }}
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[["742", "Hoàn thành"], ["98", "Huỷ"], ["52", "Vắng"]].map(([v, l]) => (
          <div key={l} className="text-center p-2.5 rounded-xl bg-gray-50">
            <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: 16, color: "#148a9c" }}>{v}</p>
            <p className="text-[10px] text-gray-500 mt-0.5">{l}</p>
          </div>
        ))}
      </div>
    </DemoFrame>
  );
}

/* ───────────────────────────────────── FEATURE GRID ───────────────────────────────────── */
function FeatureGrid() {
  const features = [
    { icon: Calendar, t: "Lịch hẹn AI", d: "Tự động phát hiện trùng giờ, đề xuất khung trống", c: "#148a9c" },
    { icon: Users, t: "Nhân viên & ca", d: "Quản lý chuyên môn, ca làm, đánh giá KPI", c: "#22AFC2" },
    { icon: Sparkles, t: "Trợ lý AI", d: "Tạo lịch từ tin nhắn, tóm tắt doanh thu", c: "#8b5cf6" },
    { icon: BarChart3, t: "Thống kê chi tiết", d: "Biểu đồ giờ cao điểm, retention, doanh thu", c: "#f97316" },
    { icon: MessageSquare, t: "SMS / Zalo ZNS", d: "Nhắc nhở khách tự động qua nhiều kênh", c: "#3b82f6" },
    { icon: Bell, t: "Thông báo real-time", d: "Push, email, SMS — bạn không bao giờ bỏ lỡ", c: "#ec4899" },
    { icon: ShieldCheck, t: "Bảo mật 2 lớp", d: "FaceID, vân tay, 2FA cấp ngân hàng", c: "#16a34a" },
    { icon: Zap, t: "Đồng bộ realtime", d: "Mọi thay đổi cập nhật tức thì trên mọi thiết bị", c: "#eab308" },
  ];
  return (
    <section className="py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <p className="text-xs tracking-widest mb-3" style={{ color: "#148a9c", fontWeight: 700, letterSpacing: "0.15em" }}>TẤT CẢ TRONG MỘT</p>
          <h2 className="text-gray-900" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: 44, letterSpacing: "-0.02em" }}>
            Mọi tính năng bạn cần
          </h2>
        </motion.div>
        <div className="grid grid-cols-4 gap-4">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div key={f.t}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 4) * 0.08 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: f.c + "15" }}>
                  <Icon size={20} style={{ color: f.c }} />
                </div>
                <h3 className="text-gray-900 mb-1.5" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: 16 }}>{f.t}</h3>
                <p className="text-sm text-gray-600" style={{ lineHeight: 1.5 }}>{f.d}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────── HOW IT WORKS ───────────────────────────────────── */
function HowItWorks() {
  const steps = [
    { n: "01", t: "Tải app & đăng ký", d: "Quét QR, tạo tài khoản trong 30 giây — hoàn toàn miễn phí gói khởi đầu." },
    { n: "02", t: "Thiết lập cơ sở", d: "Nhập thông tin spa/clinic, thêm nhân viên, dịch vụ, thiết bị." },
    { n: "03", t: "Bắt đầu vận hành", d: "Tạo lịch hẹn, để AI hỗ trợ tự động hoá. Xem doanh thu mỗi ngày." },
  ];
  return (
    <section className="py-24 px-8" style={{ background: "linear-gradient(180deg, transparent, white)" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <p className="text-xs tracking-widest mb-3" style={{ color: "#148a9c", fontWeight: 700, letterSpacing: "0.15em" }}>3 BƯỚC ĐƠN GIẢN</p>
          <h2 className="text-gray-900" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: 44, letterSpacing: "-0.02em" }}>
            Bắt đầu chỉ trong 5 phút
          </h2>
        </motion.div>
        <div className="grid grid-cols-3 gap-6 relative">
          {steps.map((s, i) => (
            <motion.div key={s.n}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
              className="relative"
            >
              <div className="bg-white rounded-3xl p-8 shadow-sm h-full">
                <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: 56, lineHeight: 1, background: "linear-gradient(135deg, #22AFC2 0%, #148a9c 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{s.n}</p>
                <h3 className="text-gray-900 mt-3 mb-2" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: 22 }}>{s.t}</h3>
                <p className="text-gray-600" style={{ fontSize: 15, lineHeight: 1.6 }}>{s.d}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 z-10" style={{ color: "#22AFC2" }}>
                  <ArrowRight size={22} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────── TESTIMONIALS ───────────────────────────────────── */
function Testimonials() {
  const items = [
    { n: "Chị Nguyễn Hà", r: "Chủ Hà Spa, Q.1", q: "Schedula giúp tôi giảm 80% thời gian quản lý lịch. AI phát hiện trùng lịch cực kỳ chính xác." },
    { n: "Anh Minh Tuấn", r: "Chủ Tuấn Clinic", q: "Khách của tôi rất thích được nhắc lịch tự động qua Zalo. Tỉ lệ no-show giảm hẳn." },
    { n: "Chị Linh Đan", r: "Quản lý Glow Beauty", q: "Báo cáo doanh thu trực quan, dễ hiểu. Tôi có thể xem ngay trên điện thoại mọi lúc." },
  ];
  return (
    <section className="py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <p className="text-xs tracking-widest mb-3" style={{ color: "#148a9c", fontWeight: 700, letterSpacing: "0.15em" }}>KHÁCH HÀNG NÓI GÌ</p>
          <h2 className="text-gray-900" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: 44, letterSpacing: "-0.02em" }}>
            Được tin dùng bởi 10,000+ chủ cơ sở
          </h2>
        </motion.div>
        <div className="grid grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div key={it.n}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
              className="bg-white rounded-3xl p-7 shadow-sm border border-gray-50">
              <div className="flex gap-0.5 mb-4">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={14} className="fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-gray-800 mb-6" style={{ fontSize: 15, lineHeight: 1.65, fontStyle: "italic" }}>"{it.q}"</p>
              <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-white" style={{ background: "linear-gradient(135deg, #22AFC2, #148a9c)", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700 }}>
                  {it.n.split(" ").pop()![0]}
                </div>
                <div>
                  <p className="text-sm text-gray-900" style={{ fontWeight: 700 }}>{it.n}</p>
                  <p className="text-xs text-gray-500">{it.r}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────── FINAL CTA ───────────────────────────────────── */
function FinalCTA() {
  return (
    <section className="py-24 px-8">
      <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto rounded-[40px] p-16 text-white relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #22AFC2 0%, #148a9c 50%, #0e6b7a 100%)" }}>
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-white/10" />
        <div className="absolute -bottom-32 -left-20 w-[400px] h-[400px] rounded-full bg-white/5" />

        <div className="relative grid grid-cols-2 gap-12 items-center">
          <div>
            <Award size={32} className="mb-4 opacity-80" />
            <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: 48, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              Sẵn sàng để bùng nổ doanh thu spa của bạn?
            </h2>
            <p className="mt-5 text-white/85" style={{ fontSize: 17, lineHeight: 1.6 }}>
              Quét mã QR bên cạnh để tải Schedula về máy. Miễn phí gói khởi đầu, không cần thẻ tín dụng.
            </p>

          </div>

          <div className="flex justify-center">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="bg-white rounded-3xl p-6 shadow-2xl"
              style={{ boxShadow: "0 30px 60px rgba(0,0,0,0.25)" }}>
              <img src={QR_SRC} alt="QR tải Schedula" className="w-56 h-56 block" />
              <p className="text-center text-xs text-gray-500 mt-3" style={{ fontWeight: 600 }}>
                Quét bằng camera điện thoại
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ───────────────────────────────────── FOOTER ───────────────────────────────────── */
function Footer() {
  return (
    <footer className="px-8 pb-10 pt-10 border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-3">
        <div className="flex items-center gap-3">
          <SchedulaLogo size={40} />
          <span className="text-gray-900" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: 24, letterSpacing: "-0.02em" }}>Schedula</span>
        </div>
        <p className="text-sm text-gray-500 text-center" style={{ maxWidth: 420, lineHeight: 1.6 }}>
          Nền tảng quản lý spa, clinic, salon thông minh dành cho thị trường Việt Nam.
        </p>
        <div className="mt-4 pt-6 border-t border-gray-100 w-full flex items-center justify-between">
          <p className="text-xs text-gray-400">© 2026 Schedula Inc. Mọi quyền được bảo lưu.</p>
          <p className="text-xs text-gray-400">Made in Vietnam 🇻🇳</p>
        </div>
      </div>
    </footer>
  );
}

/* ───────────────────────────────────── BADGES ───────────────────────────────────── */
function AppStoreBadge() {
  return (
    <a href="#" className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-black/90 hover:bg-black text-white">
      <Apple size={20} />
      <div className="text-left leading-tight">
        <p className="text-[9px] opacity-80">Tải về trên</p>
        <p className="text-sm" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700 }}>App Store</p>
      </div>
    </a>
  );
}

function GooglePlayBadge() {
  return (
    <a href="#" className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-black/90 hover:bg-black text-white">
      <Smartphone size={20} />
      <div className="text-left leading-tight">
        <p className="text-[9px] opacity-80">Tải về trên</p>
        <p className="text-sm" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700 }}>Google Play</p>
      </div>
    </a>
  );
}

/* ───────────────────────────────────── QR MODAL ───────────────────────────────────── */
function QrModal({ onClose }: { onClose: () => void }) {
  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-6" />
      <motion.div initial={{ opacity: 0, scale: 0.85, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9 }}
        transition={{ type: "spring", damping: 22, stiffness: 280 }}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-white rounded-3xl shadow-2xl p-8 w-[440px]">
        <button onClick={onClose} className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500">
          <X size={16} />
        </button>

        <div className="text-center">
          <div className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center" style={{ background: "linear-gradient(135deg, #22AFC2, #148a9c)" }}>
            <QrCode size={24} className="text-white" />
          </div>
          <h3 className="text-gray-900 mb-2" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: 22 }}>
            Tải Schedula về điện thoại
          </h3>
          <p className="text-sm text-gray-500 mb-6">
            Mở camera điện thoại và hướng vào mã QR bên dưới — App Store / CH Play sẽ tự mở.
          </p>

          <div className="inline-block p-4 rounded-2xl" style={{ background: "linear-gradient(135deg, #f0f9fa, #e0f8fc)", border: "1px solid #22AFC2" }}>
            <img src={QR_SRC} alt="QR Schedula" className="w-64 h-64 block rounded-xl" />
          </div>

          <p className="text-xs text-gray-400 mt-5">
            Miễn phí gói khởi đầu · Không cần thẻ tín dụng
          </p>
        </div>
      </motion.div>
    </>
  );
}

export default Landing;
