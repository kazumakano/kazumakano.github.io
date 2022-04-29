import type { ComponentProps } from "./_app"
import Layout from "../components/layout"
import TextBox from "../components/text-box"
import LangBars from "../components/language-bars"
import { FrameworkGrid, FrameworkTile } from "../components/framework-tiles"


const downIcon = (
  <svg height="1em" viewBox="0 0 16 16" width="1em">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
  </svg>
)

const djangoIcon = (
  <svg viewBox="2 2 20 20">
    <path d="M11,3v5.159C10.653,8.018,9.904,8,9.535,8C6.759,8,4.19,9.306,4.19,13c0,4.42,3.48,5,5.81,5c0.92,0,3-0.09,4-0.38V3H11z M9.97,15.533c-1.31,0-2.58-0.413-2.58-2.533s1.27-2.45,2.58-2.45c0.32,0,0.68,0.06,1.03,0.14v4.703 C10.65,15.473,10.29,15.533,9.97,15.533z" />
    <rect height="3" width="3" x="16" y="3" />
    <path d="M19,16.702c0,1-0.235,4.294-3.141,5.294L13,20.702c2.078-0.906,3-2.484,3-4C16,14.608,16,8,16,8h3 C19,8,19,14.452,19,16.702z" />
  </svg>
)

const nextJsIcon = (
  <svg viewBox="0 0 1000 1000" fill="none">
    <path d="M467.253 0.269139C465.103 0.464613 458.26 1.14878 452.102 1.63747C310.068 14.4411 177.028 91.0671 92.7664 208.841C45.8456 274.325 15.8358 348.605 4.49658 427.284C0.488759 454.748 0 462.86 0 500.098C0 537.336 0.488759 545.448 4.49658 572.912C31.6716 760.666 165.298 918.414 346.53 976.861C378.983 987.319 413.196 994.453 452.102 998.754C467.253 1000.42 532.747 1000.42 547.898 998.754C615.054 991.326 671.945 974.71 728.055 946.073C736.657 941.675 738.319 940.502 737.146 939.525C736.364 938.939 699.707 889.777 655.718 830.352L575.758 722.353L475.562 574.085C420.43 492.572 375.073 425.915 374.682 425.915C374.291 425.818 373.9 491.693 373.705 572.13C373.412 712.97 373.314 718.639 371.554 721.962C369.013 726.751 367.058 728.706 362.952 730.856C359.824 732.42 357.087 732.713 342.327 732.713H325.415L320.919 729.878C317.986 728.021 315.836 725.578 314.37 722.744L312.317 718.345L312.512 522.382L312.805 326.321L315.836 322.509C317.4 320.457 320.723 317.818 323.069 316.547C327.077 314.592 328.641 314.397 345.552 314.397C365.494 314.397 368.817 315.179 373.998 320.848C375.464 322.411 429.717 404.12 494.624 502.541C559.531 600.963 648.289 735.352 691.887 801.324L771.065 921.248L775.073 918.609C810.557 895.543 848.094 862.703 877.81 828.495C941.056 755.877 981.818 667.326 995.503 572.912C999.511 545.448 1000 537.336 1000 500.098C1000 462.86 999.511 454.748 995.503 427.284C968.328 239.53 834.702 81.7821 653.47 23.3352C621.505 12.975 587.488 5.84016 549.365 1.53972C539.98 0.562345 475.367 -0.51276 467.253 0.269139ZM671.945 302.668C676.637 305.014 680.45 309.51 681.818 314.201C682.6 316.743 682.796 371.085 682.6 493.549L682.307 669.281L651.32 621.781L620.235 574.281V446.538C620.235 363.95 620.626 317.525 621.212 315.277C622.776 309.803 626.197 305.503 630.89 302.962C634.897 300.909 636.364 300.714 651.711 300.714C666.178 300.714 668.719 300.909 671.945 302.668Z" fill="black" />
  </svg>
)

const pyTorchIcon = (
  <svg viewBox="0 0 40.2 40.2">
    <path fill="black" d="m 26.975479,12.199999 c -1.3,-1 -1.8,3.9 -4.4,3.9 -3,0 -4,-12.9999998 -6.3,-12.9999998 -0.7,0 -0.8,-0.4 -7.9000003,21.2999998 -2.9000001,9 4.4000003,15.8 11.8000003,15.8 4.6,0 12.3,-3 12.3,-12.6 0,-7.1 -3.5,-13.9 -5.5,-15.4 z m -6.9,23.1 c -3.7,0 -6.7,-3.1 -6.7,-7 0,-3.9 3,-7 6.7,-7 3.7,0 6.7,3.1 6.7,7 0,3.8 -3,7 -6.7,7 z" />
    <path fill="black" d="m 24.075479,-7.6293945e-7 c -0.5,0 -1.8,2.49999996293945 -1.8,3.59999996293945 0,1.5 1,2 1.8,2 0.8,0 1.8,-0.5 1.8,-2 -0.1,-1.1 -1.4,-3.59999996293945 -1.8,-3.59999996293945 z" />
  </svg>
)

const reactIcon = (
  <svg viewBox="-11.5 -11.5 23 23">
    <circle cx="0" cy="0" r="2.05" fill="black" />
    <g stroke="black" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
)

const unityIcon = (
  <svg viewBox="400 400 1200 1200">
    <path d="M1513.54,1229.86V693l-465-268.44V630.46l182.19,105.18c6.59,3.65,6.76,14,0,17.64l-216.55,125a20.34,20.34,0,0,1-20.4,0l-216.53-125c-6.61-3.62-6.8-14,0-17.66L959.41,630.45V424.53L494.46,693v536.89l178.34-103V916.51c-.13-7.53,8.74-12.83,15.29-8.78l216.54,125a20.38,20.38,0,0,1,10.2,17.68v250c.17,7.49-8.66,12.86-15.21,8.87L717.39,1204.11l-178.34,103,465,268.44,465-268.44-178.34-103L1108.43,1309.3c-6.46,3.88-15.49-1.14-15.26-8.84v-250a20.36,20.36,0,0,1,10.22-17.67l216.52-125c6.44-3.92,15.53,1.11,15.29,8.82v210.34Z" />
    <path d="M1004,1575.52l465-268.44-178.34-103L1108.43,1309.3c-6.46,3.88-15.49-1.14-15.26-8.84v-250a20.39,20.39,0,0,1,10.21-17.67l216.53-125c6.44-3.92,15.53,1.11,15.29,8.82v210.34l178.34,103V693L1004,987.15Z" />
    <path d="M1048.58,424.53V630.46l182.19,105.18c6.59,3.65,6.76,14,0,17.64l-216.55,125a20.34,20.34,0,0,1-20.4,0l-216.53-125c-6.61-3.62-6.8-14,0-17.66L959.41,630.46V424.53L494.46,693,1004,987.15,1513.54,693Z" />
    <path d="M899.62,1309.33,717.39,1204.11l-178.34,103,465,268.44V987.15L494.46,693v536.89l178.34-103V916.51c-.13-7.53,8.74-12.83,15.29-8.78l216.54,125a20.38,20.38,0,0,1,10.2,17.68v250C915,1308,906.17,1313.32,899.62,1309.33Z" />
  </svg>
)

export default function Skill({ pageIndex, transDirect, setPage }: ComponentProps): JSX.Element {
  return (
    <Layout pageIndex={pageIndex} transDirect={transDirect} setPage={setPage} title="skill">
      <TextBox enableMargins={[false, true]} proportion={50}>
        <h2>language</h2>
        <p>{downIcon} bytes in public repositories</p>
        <LangBars />
      </TextBox>

      <TextBox enableMargins={[true, false]} proportion={50}>
        <h2>framework</h2>
        <FrameworkGrid gridShape={[4, 2]}>
          <FrameworkTile color="#092e20" icon={djangoIcon} index={[0, 0]} name="Django" url={"https://www.djangoproject.com/"} />
          <FrameworkTile color="black" icon={nextJsIcon} index={[1, 0]} name="Next.js" url={"https://nextjs.org/"} />
          <FrameworkTile color="#f05732" icon={pyTorchIcon} index={[2, 0]} name="PyTorch" url={"https://pytorch.org/"} />
          <FrameworkTile color="#61dafb" icon={reactIcon} index={[3, 0]} name="React" url={"https://ja.reactjs.org/"} />
          <FrameworkTile color="black" icon={unityIcon} index={[0, 1]} name="Unity" url={"https://unity.com/ja/"} />
        </FrameworkGrid>
      </TextBox>
    </Layout>
  )
}
