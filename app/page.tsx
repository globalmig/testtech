import Image from "next/image";

const services = [
  {
    title: "상가 전기공사",
    desc: "신규 입점, 리모델링, 증설 공사에 맞춰 분전반, 배선, 조명, 콘센트, 동력 라인을 안전 기준에 맞게 시공합니다.",
    image: "/images/visual/fire-system.svg",
  },
  {
    title: "아파트 전기공사",
    desc: "세대 내부 배선 교체, 누전 점검, 차단기 교체, LED 조명 교체까지 주거 환경에 최적화된 전기공사를 제공합니다.",
    image: "/images/visual/electric-control.svg",
  },
  {
    title: "오피스/공장 전기설비",
    desc: "부하 분석을 기반으로 전력 분배를 최적화하고, 설비 안정성을 높이는 전기설비 구축 및 개선 공사를 수행합니다.",
    image: "/images/visual/fire-electric-hero.svg",
  },
  {
    title: "유지보수 및 긴급출동",
    desc: "정기 점검과 예방 정비로 고장을 줄이고, 긴급 장애 발생 시 신속 대응으로 운영 중단 시간을 최소화합니다.",
    image: "/images/visual/fire-system.svg",
  },
];

const performance = [
  {
    name: "상가 분전반 교체 및 증설 공사",
    detail: "노후 분전반 교체, 차단기 용량 조정, 회로 분리로 전기 안전성과 운영 안정성을 개선했습니다.",
    year: "2026",
  },
  {
    name: "아파트 공용부 LED 교체 공사",
    detail: "복도/주차장 조명 교체와 제어 방식 개선으로 에너지 사용량을 절감했습니다.",
    year: "2025",
  },
  {
    name: "공장 동력 배선 정비 공사",
    detail: "생산 라인 부하 재배치와 배선 정비로 설비 트립 발생률을 낮췄습니다.",
    year: "2025",
  },
];

const notices = [
  { title: "2026년 상반기 전기안전 점검 접수 안내", date: "2026-03-03" },
  { title: "상가·아파트 전기공사 상담 예약 운영", date: "2026-02-20" },
  { title: "긴급출동 대응 프로세스 개편 안내", date: "2026-02-07" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#111827]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-[#0a2f6c]/80 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
          <strong className="font-heading text-lg text-white">JINYANG ELECTRIC</strong>
          <nav className="hidden items-center gap-7 text-sm text-white/90 md:flex">
            <a href="#company" className="hover:text-white">
              회사소개
            </a>
            <a href="#services" className="hover:text-white">
              주요공사
            </a>
            <a href="#performance" className="hover:text-white">
              공사실적
            </a>
            <a href="#consult" className="hover:text-white">
              온라인상담
            </a>
            <a href="#notice" className="hover:text-white">
              공지사항
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative min-h-[100svh] overflow-hidden pt-16">
          <div className="hero-layer layer-1" />
          <div className="hero-layer layer-2" />
          <div className="hero-layer layer-3" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,23,58,0.35)_0%,rgba(3,23,58,0.58)_100%)]" />

          <div className="relative mx-auto flex min-h-[calc(100svh-64px)] w-full max-w-6xl items-center px-4 sm:px-6">
            <div className="max-w-4xl text-white">
              <p className="font-heading text-sm tracking-[0.2em] text-white/85">ELECTRICAL CONSTRUCTION PARTNER</p>
              <h1 className="font-heading mt-6 text-4xl leading-[1.05] font-extrabold sm:text-6xl lg:text-7xl">
                전기공사를 주업으로
                <br />
                상가·아파트·산업시설을 책임 시공합니다
              </h1>
              <p className="mt-7 max-w-3xl text-base leading-7 text-white/90 sm:text-lg">
                설계 검토부터 시공, 점검, 유지보수까지 한 번에 제공합니다. 현장 조건과 예산에 맞춘 안전하고 효율적인 전기공사로
                안정적인 운영을 지원합니다.
              </p>
            </div>
          </div>

          <div className="pointer-events-none absolute bottom-9 left-1/2 -translate-x-1/2 text-white">
            <div className="mx-auto h-11 w-7 rounded-full border border-white/80">
              <span className="mouse-wheel" />
            </div>
            <p className="font-heading mt-2 text-center text-[11px] tracking-[0.14em]">SCROLL DOWN</p>
          </div>
        </section>

        <section id="services" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
          <h2 className="font-heading text-center text-4xl font-bold text-black">주요 전기공사</h2>
          <p className="mt-2 text-center text-lg font-light text-[#666]">상가, 아파트, 오피스, 공장 등 다양한 현장을 시공합니다.</p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <article key={service.title} className="group relative h-[430px] overflow-hidden">
                <Image src={service.image} alt={service.title} fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                <div className="absolute inset-0 bg-[#0b2f67]/30 transition group-hover:bg-[#0b2f67]/80" />
                <div className="absolute inset-x-0 bottom-7 px-5 text-center text-white transition group-hover:opacity-0">
                  <p className="text-xl font-medium">{service.title}</p>
                </div>
                <div className="absolute inset-0 flex flex-col justify-center px-7 text-white opacity-0 transition duration-500 group-hover:opacity-100">
                  <h3 className="text-2xl font-semibold">{service.title}</h3>
                  <p className="mt-5 text-sm leading-6 text-[#d6e4f8]">{service.desc}</p>
                  <button className="font-heading mt-7 h-11 w-30 rounded-full border border-white text-sm">MORE</button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="company" className="bg-[linear-gradient(135deg,#ebf4ff_0%,#ffffff_55%,#e8f2ff_100%)] py-16 min-h-screen flex justify-center items-center">
          <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr]">
            <div className="overflow-hidden rounded-2xl border border-[#d8e5f8] shadow-[0_12px_30px_rgba(15,47,90,0.12)]">
              <Image src="/images/visual/fire-electric-hero.svg" alt="회사 소개 비주얼" width={960} height={620} className="h-full w-full object-cover" />
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-[0_14px_35px_rgba(15,47,90,0.14)]">
              <h3 className="font-heading text-4xl font-extrabold text-[#003d91]">JINYANG ELECTRIC</h3>
              <p className="mt-5 text-base leading-8 text-[#2c3a4d]">
                진양전기는 전기공사 전문 업체로서 상가, 아파트, 오피스, 공장 등 다양한 시설의 전기설비를 설계 검토부터 시공,
                사후관리까지 책임 수행합니다.
              </p>
              <a href="#consult" className="font-heading mt-8 inline-flex h-12 items-center rounded-full bg-[#003d91] px-8 text-sm text-white">
                VIEW MORE
              </a>
            </div>
          </div>
        </section>

        <section id="performance" className="bg-[#0f2f5a] py-16 min-h-screen flex justify-center items-center">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <h2 className="font-heading text-4xl font-bold text-white">공사실적</h2>
            <p className="mt-2 text-[#b8cff0]">최근 수행 프로젝트</p>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {performance.map((item) => (
                <article key={item.name} className="rounded-2xl border border-white/20 bg-white/5 p-6 py-20 text-white">
                  <p className="font-heading text-sm text-[#8ec2ff]">{item.year}</p>
                  <h3 className="mt-2 text-xl font-semibold">{item.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/80">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="consult" className="bg-[linear-gradient(135deg,#f6faff_0%,#e7f1ff_100%)] py-16 min-h-screen flex justify-center items-center">
          <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <h2 className="font-heading text-4xl font-bold text-[#0f2f5a]">온라인 상담</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[#355077]">
                상가·아파트 전기공사, 유지보수, 긴급 복구까지 현장 상황에 맞춰 상담해드립니다. 문의 접수 후 담당 기술자가 빠르게
                연락드립니다.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contact" className="font-heading inline-flex h-12 items-center rounded-full bg-[#003d91] px-7 text-sm text-white">
                  상담 접수하기
                </a>
                <a href="#notice" className="font-heading inline-flex h-12 items-center rounded-full border border-[#003d91] px-7 text-sm text-[#003d91]">
                  공지 확인하기
                </a>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-[#d5e3f8] bg-white shadow-[0_12px_30px_rgba(15,47,90,0.12)]">
              <Image src="/images/visual/electric-control.svg" alt="온라인 상담 안내" width={720} height={480} className="h-auto w-full object-cover" />
            </div>
          </div>
        </section>

        <section id="notice" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
          <div className="flex items-end justify-between border-b-2 border-black pb-4">
            <h2 className="font-heading text-4xl font-bold">공지사항</h2>
            <a href="#contact" className="text-sm text-[#555]">
              + 더보기
            </a>
          </div>
          <ul className="divide-y divide-[#d9d9d9]">
            {notices.map((notice) => (
              <li key={notice.title} className="flex items-center justify-between gap-4 py-4">
                <p className="text-[#555]">
                  <span className="mr-1 text-[#00a3dc]">공지</span>
                  {notice.title}
                </p>
                <span className="text-[#999]">{notice.date}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer id="contact" className="bg-[#0d1c2f] text-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <p className="font-heading text-2xl font-bold">진양전기 주식회사</p>
          <div className="mt-5 space-y-2 text-sm text-white/85">
            <p>서울특별시 송파구 오금로 23, 2층</p>
            <p>대표자: 홍길동 | 사업자등록번호: 121-81-40292</p>
            <p>고객센터: 02-431-0730 | 이메일: mail@jinyangelectric.co.kr</p>
          </div>
          <p className="mt-7 text-xs text-white/60">Copyright 진양전기 주식회사 All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}
