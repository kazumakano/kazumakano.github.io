import styles from "../styles/Skill.module.css"
import type { ComponentProps } from "./_app"
import type { LangColors } from "../components/language-bars"
import Layout from "../components/layout"
import TextBox from "../components/text-box"
import LangBars from "../components/language-bars"
import { FrameworkGrid, FrameworkTile } from "../components/framework-tiles"


type SkillProps = ComponentProps & {langColors: LangColors}

const blenderIcon = (
  <svg viewBox="0 -50 650 600">
    <g transform="matrix(1,0,0,1,-7.78614,0)">
      <g transform="matrix(1,0,0,0.835201,7.78614,-42.9907)">
        <g transform="matrix(4.16667,0,0,4.98882,-191.107,2195.04)">
          <g transform="matrix(5.19226,0,0,5.19226,-1154.33,1375.29)">
            <path d="M243.13,-333.715C243.236,-335.606 244.162,-337.272 245.559,-338.453C246.929,-339.613 248.773,-340.322 250.785,-340.322C252.795,-340.322 254.639,-339.613 256.01,-338.453C257.406,-337.272 258.332,-335.606 258.439,-333.717C258.545,-331.774 257.764,-329.969 256.394,-328.631C254.997,-327.27 253.01,-326.416 250.785,-326.416C248.56,-326.416 246.569,-327.27 245.173,-328.631C243.802,-329.969 243.023,-331.774 243.13,-333.715Z" fill="none" />
          </g>
          <g transform="matrix(2.66418,0,0,2.66418,-520.324,532.513)">
            <path d="M243.13,-333.715C243.236,-335.606 244.162,-337.272 245.559,-338.453C246.929,-339.613 248.773,-340.322 250.785,-340.322C252.795,-340.322 254.639,-339.613 256.01,-338.453C257.406,-337.272 258.332,-335.606 258.439,-333.717C258.545,-331.774 257.764,-329.969 256.394,-328.631C254.997,-327.27 253.01,-326.416 250.785,-326.416C248.56,-326.416 246.569,-327.27 245.173,-328.631C243.802,-329.969 243.023,-331.774 243.13,-333.715Z" />
          </g>
          <g transform="matrix(2.66418,0,0,2.66418,-520.324,532.513)">
            <path d="M230.94,-329.894C230.953,-329.154 231.189,-327.716 231.543,-326.593C232.287,-324.216 233.549,-322.017 235.305,-320.079C237.107,-318.087 239.326,-316.487 241.889,-315.351C244.583,-314.158 247.502,-313.55 250.534,-313.555C253.561,-313.559 256.48,-314.179 259.174,-315.381C261.737,-316.528 263.954,-318.135 265.753,-320.128C267.508,-322.074 268.768,-324.277 269.514,-326.654C269.889,-327.855 270.126,-329.074 270.221,-330.297C270.314,-331.502 270.275,-332.709 270.104,-333.915C269.77,-336.265 268.957,-338.47 267.705,-340.48C266.56,-342.327 265.084,-343.944 263.329,-345.305L263.333,-345.308L245.622,-358.907C245.606,-358.919 245.593,-358.932 245.576,-358.943C244.414,-359.835 242.46,-359.832 241.182,-358.938C239.89,-358.034 239.742,-356.539 240.892,-355.596L240.887,-355.591L248.274,-349.584L225.759,-349.56L225.729,-349.56C223.868,-349.558 222.079,-348.337 221.725,-346.794C221.361,-345.222 222.625,-343.918 224.56,-343.911L224.557,-343.904L235.969,-343.926L215.605,-328.295C215.579,-328.276 215.551,-328.256 215.527,-328.237C213.606,-326.766 212.985,-324.32 214.195,-322.772C215.423,-321.198 218.034,-321.195 219.975,-322.763L231.089,-331.859C231.089,-331.859 230.927,-330.631 230.94,-329.894ZM259.499,-325.782C257.209,-323.449 254.003,-322.126 250.534,-322.119C247.06,-322.113 243.854,-323.424 241.564,-325.753C240.445,-326.888 239.623,-328.194 239.116,-329.585C238.619,-330.952 238.426,-332.403 238.554,-333.867C238.675,-335.298 239.101,-336.663 239.781,-337.898C240.449,-339.112 241.369,-340.209 242.505,-341.137C244.731,-342.951 247.565,-343.933 250.529,-343.937C253.496,-343.941 256.328,-342.968 258.556,-341.16C259.69,-340.236 260.609,-339.143 261.277,-337.931C261.96,-336.697 262.383,-335.337 262.509,-333.902C262.635,-332.44 262.442,-330.991 261.945,-329.623C261.437,-328.228 260.618,-326.922 259.499,-325.782Z" />
          </g>
        </g>
      </g>
    </g>
  </svg>
)

const daVinciResolveIcon = (
  <svg viewBox="-0.6 0 5118.3 5118.9">
    <path d="M2636.9 5118.9h-151.7c-7.1-2.6-14.1-3.2-21.2-3.2-81-3.9-161.4-10.3-241.1-21.2-149.1-19.3-295.7-52.1-438.4-97.7-244.9-78.4-473.1-190.9-684.6-337.5-196.1-136.3-369.6-297-520.7-482.1-178.1-217.3-316.9-457.1-415.3-720.6-88.1-234-140.8-476.3-156.9-726.4-.6-13.5-2.6-27-7.1-40.5v-264.2c4.5-11.6 6.4-23.8 7.1-36 3.2-59.8 9.6-119.6 17.4-178.7 38.6-285.4 123.4-556.1 253.9-812.6 90-176.8 199.3-341.3 327.8-493.1 127.3-150.4 270-284.8 428.1-402.4 257.8-191.6 541.3-329.8 851.1-414.6 150.4-41.1 304.1-68.1 459.6-81 27.6-2.6 56.6-.6 84.2-7.1h259.7c19.9 5.8 40.5 2.6 60.4 4.5 102.9 9 205.1 21.9 306.6 41.8 319.5 63 615.8 182.6 889.7 359.3 212.8 136.9 400.5 302.1 564.4 494.3 131.8 154.3 243.6 322.1 334.9 503.3 108 214.1 185.1 438.4 228.9 674.3 23.1 124.7 40.5 250.7 41.1 378 0 8.4 1.9 17.4 2.6 25.7v151.7c-2.6 9.6-2.6 19.9-3.2 30.2 0 24.4 0 48.9-1.9 73.3-11.6 155.6-36 309.2-74.6 460.9-73.9 284.8-192.9 549-358.1 792.6-122.8 181.3-266.1 344.6-430.7 489.2-163.9 144-343.3 265.5-538.1 363.8-224.4 113.1-460.3 191.6-707.8 234.6-95.1 16.7-190.9 27.6-287.3 33.4-25.4 2.9-52.4 2.3-78.8 8zM1602.6 3897.5c42.4 1.3 90-3.9 137.6-14.1 140.8-30.9 260.4-95.1 352.3-208.9 55.9-69.4 102.9-144.6 143.4-223.7 47.6-93.2 87.4-190.3 122.1-288.6 42.4-118.9 78.4-240.4 106.1-363.2 15.4-68.8-1.9-111.9-77.8-135.6-96.4-30.2-193.5-57.2-292.5-79.1-163.9-36-329.1-59.1-497.6-53.4-47.6 1.9-95.1 7.1-142.1 15.4-136.3 23.8-252 86.8-346.5 186.4-161.4 169.7-225.6 372.2-185.8 603 57.2 329.8 349.1 564.4 680.8 561.8zm271.9-2364.3c-1.9 48.2 7.1 100.9 21.9 153.6 28.3 100.3 75.2 192.2 130.5 279 126 197.4 284.8 366.4 457.1 523.3 14.1 12.9 30.9 23.8 48.9 32.1 18 9 36 9 54.6 1.3 18-7.7 34.1-18.6 47.6-32.8 59.8-59.1 118.9-118.3 175.5-179.4 79.7-86.8 155.6-176.1 224.4-271.9 62.4-86.8 118.3-178.1 159.4-277.1 41.1-98.4 61.1-199.9 47.6-306.6-22.5-176.1-97.7-325.3-232.1-442.3-158.9-138.1-344-193.4-552.3-162.6-338.8 50.2-584.4 348.5-583.1 683.4zm1670.1 2360.5c16.7-.6 46.9 0 77.1-4.5 203.1-30.2 363.8-128.6 477-300.8 88.7-135.6 124.7-286.1 108-447.4-15.4-151.1-76.5-283.5-180-394.7-90-96.4-197.4-163.3-327.2-191.6-71.4-15.4-144-21.9-216.6-23.1-86.1-1.3-171.6 6.4-256.5 18-169.7 23.8-335.6 64.3-498.8 115.7-16.7 5.1-32.1 12.9-45.6 23.8-17.4 14.1-27 31.5-27 54 0 19.3 1.9 38.6 6.4 57.9 10.3 38.6 19.3 77.1 29.6 115.1 47.6 173.6 105.4 343.3 184.5 505.3 45.6 93.2 98.4 181.3 165.9 260.4 51.4 59.8 111.2 108.6 182.6 142.7 97.6 46.7 199.1 71.8 320.6 69.2z" />
  </svg>
)

const djangoIcon = (
  <svg viewBox="2 2 20 20">
    <path d="M11,3v5.159C10.653,8.018,9.904,8,9.535,8C6.759,8,4.19,9.306,4.19,13c0,4.42,3.48,5,5.81,5c0.92,0,3-0.09,4-0.38V3H11z M9.97,15.533c-1.31,0-2.58-0.413-2.58-2.533s1.27-2.45,2.58-2.45c0.32,0,0.68,0.06,1.03,0.14v4.703 C10.65,15.473,10.29,15.533,9.97,15.533z" />
    <rect height="3" width="3" x="16" y="3" />
    <path d="M19,16.702c0,1-0.235,4.294-3.141,5.294L13,20.702c2.078-0.906,3-2.484,3-4C16,14.608,16,8,16,8h3 C19,8,19,14.452,19,16.702z" />
  </svg>
)

const dockerIcon = (
  <svg viewBox="0 0 30 30">
    <path d="M 29.371846,12.438214 C 28.69672,11.969773 27.149557,11.794108 25.939957,12.028328 25.799305,10.857226 25.15231,9.832511 24.027101,8.9249066 L 23.380105,8.4564655 22.930021,9.1298496 c -0.562605,0.8783264 -0.843908,2.1079844 -0.759516,3.2790864 0.02812,0.409886 0.168781,1.141825 0.590734,1.785931 -0.393823,0.234221 -1.2096,0.526996 -2.278549,0.526996 H 0.14452461 l -0.05626044,0.234221 c -0.19691175,1.171102 -0.19691175,4.830797 2.10976813,7.641443 1.744075,2.137262 4.3320573,3.220531 7.7358165,3.220531 7.3701232,0 12.8273902,-3.542584 15.3872422,-9.95437 1.012689,0.02928 3.178718,0 4.275798,-2.195817 0.02812,-0.05856 0.08439,-0.175665 0.281301,-0.614829 l 0.112526,-0.23422 z M 16.403805,4.1819416 h -3.094327 v 2.9277562 h 3.094327 z m 0,3.5133073 h -3.094327 v 2.9277561 h 3.094327 z m -3.656932,0 H 9.6525465 v 2.9277561 h 3.0943265 z m -3.6569313,0 H 5.995615 V 10.623005 H 9.0899417 Z M 5.4330102,11.208556 H 2.3386835 v 2.927756 h 3.0943267 z m 3.6569315,0 H 5.995615 v 2.927756 h 3.0943267 z m 3.6569313,0 H 9.6525465 v 2.927756 h 3.0943265 z m 3.656932,0 h -3.094327 v 2.927756 h 3.094327 z m 3.656931,0 H 16.96641 v 2.927756 h 3.094326 z" />
  </svg>
)

const downIcon = (
  <svg height="1em" viewBox="0 0 16 16" width="1em">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
  </svg>
)

const expoIcon = (
  <svg viewBox="0 -1 24 23">
    <path d="M11.39 8.269c.19-.277.397-.312.565-.312.168 0 .447.035.637.312 1.49 2.03 3.95 6.075 5.765 9.06 1.184 1.945 2.093 3.44 2.28 3.63.7.714 1.66.269 2.218-.541.549-.797.701-1.357.701-1.954 0-.407-7.958-15.087-8.759-16.309C14.027.98 13.775.683 12.457.683h-.988c-1.315 0-1.505.297-2.276 1.472C8.392 3.377.433 18.057.433 18.463c0 .598.153 1.158.703 1.955.558.81 1.518 1.255 2.218.54.186-.19 1.095-1.684 2.279-3.63 1.815-2.984 4.267-7.029 5.758-9.06z" />
  </svg>
)

const flaskIcon = (
  <svg viewBox="0 0 32 32">
    <path d="M9.563 26.873c-1.22-.96-2.52-1.878-3.408-3.172-1.87-2.283-3.31-4.925-4.294-7.703-.595-1.806-.8-3.743-1.566-5.48-.802-1.26.138-2.64 1.52-3.04.615-.118 1.696-.7.39-.284-1.17.858-1.283-.78-.083-.884.82-.11 1.12-.78.84-1.382-.88-.574 2.132-1.203.616-2.06C2 1.168 5.786.84 4.852 2.774 4.63 4.26 7.498 2.5 6.832 4.218c.677.825 2.534.188 2.487 1.345.986.068 1.324.897 2.25.96.96.433 2.697.774 3.023 1.855-.95.753-3.153-1.555-3.26.53.288 3.08.214 6.252 1.34 9.185.533 1.775 1.825 3.173 2.99 4.556 1.117 1.354 2.63 2.308 4.17 3.11 1.352.638 2.81 1.06 4.283 1.326.597-.457 1.653-2.156 2.584-1.44.045.806-1.85 1.684-.09 1.595 1.035-.312 1.752.8 2.603-.204.785.93 3.26-.593 2.703 1.306-.755.487-1.856.193-2.612.863-1.247-.623-2.24.557-3.62.408-1.533.275-3.092.385-4.646.387-2.55-.2-5.153-.286-7.578-1.174-1.367-.397-2.7-1.175-3.9-1.954z" />
  </svg>
)

const nextIcon = (
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

const pyTorchLightningIcon = (
  <svg viewBox="0 0 24 24">
    <path d="M12 0L1.75 6v12L12 24l10.25-6V6zm-1.775 18l1.08-4.657-2.428-2.397L13.79 6l-1.082 4.665 2.414 2.384z" />
  </svg>
)

const rayIcon = (
  <svg viewBox="0 0 44 44">
    <path d="M15.989 20.258a6.013 6.013 0 0 1 1.552-2.736 5.88 5.88 0 0 1 4.172-1.727c1.63 0 3.104.66 4.172 1.727a6.011 6.011 0 0 1 1.552 2.736h4.346a5.746 5.746 0 0 1 .66-1.592l-7.703-7.703a5.954 5.954 0 0 1-3.027.835 5.88 5.88 0 0 1-4.172-1.727 5.88 5.88 0 0 1-1.727-4.172c0-1.63.66-3.105 1.727-4.172A5.88 5.88 0 0 1 21.713 0c1.63 0 3.104.66 4.172 1.727a5.88 5.88 0 0 1 1.727 4.172 5.9 5.9 0 0 1-.835 3.027l7.703 7.703a5.954 5.954 0 0 1 3.028-.834c1.63 0 3.104.66 4.171 1.727a5.88 5.88 0 0 1 1.727 4.171 5.88 5.88 0 0 1-1.727 4.172 5.88 5.88 0 0 1-4.172 1.727 5.9 5.9 0 0 1-3.026-.834l-7.704 7.723c.524.892.835 1.92.835 3.026a5.88 5.88 0 0 1-1.727 4.172 5.88 5.88 0 0 1-4.172 1.727 5.88 5.88 0 0 1-4.172-1.727 5.88 5.88 0 0 1-1.727-4.172c0-1.63.66-3.104 1.727-4.171a5.88 5.88 0 0 1 4.172-1.727 5.9 5.9 0 0 1 3.027.834l7.703-7.703a5.746 5.746 0 0 1-.66-1.591h-4.346a6.011 6.011 0 0 1-1.552 2.736 5.88 5.88 0 0 1-4.172 1.727 5.88 5.88 0 0 1-4.172-1.727 6.013 6.013 0 0 1-1.552-2.736h-4.347a6.013 6.013 0 0 1-1.552 2.736 5.88 5.88 0 0 1-4.172 1.727 5.88 5.88 0 0 1-4.172-1.727A5.817 5.817 0 0 1 0 21.713c0-1.63.66-3.105 1.727-4.172a5.88 5.88 0 0 1 4.172-1.727c1.63 0 3.104.66 4.172 1.727a6.014 6.014 0 0 1 1.552 2.736h4.366v-.02Zm3.59 19.384c.543.543 1.3.892 2.134.892.834 0 1.59-.33 2.134-.892.543-.543.893-1.3.893-2.135 0-.834-.33-1.59-.893-2.134a3.022 3.022 0 0 0-2.134-.892c-.835 0-1.591.33-2.135.892a3.022 3.022 0 0 0-.892 2.135c0 .834.33 1.59.892 2.134Zm20.063-15.795c.543-.543.892-1.3.892-2.134 0-.835-.33-1.591-.892-2.135a3.022 3.022 0 0 0-2.135-.892c-.834 0-1.59.33-2.134.892a3.022 3.022 0 0 0-.892 2.135c0 .834.33 1.59.892 2.134.543.543 1.3.893 2.135.893a3.106 3.106 0 0 0 2.134-.893ZM23.847 3.764a3.022 3.022 0 0 0-2.134-.892c-.835 0-1.591.33-2.135.892a3.022 3.022 0 0 0-.892 2.135c0 .834.33 1.59.892 2.134.544.543 1.3.893 2.135.893.834 0 1.59-.33 2.134-.893.543-.543.893-1.3.893-2.134a3.106 3.106 0 0 0-.893-2.135ZM3.764 19.578a3.022 3.022 0 0 0-.892 2.135c0 .834.33 1.59.892 2.134.544.543 1.3.893 2.135.893.834 0 1.59-.33 2.134-.893.543-.563.893-1.3.893-2.134 0-.835-.33-1.591-.893-2.135-.563-.543-1.3-.892-2.134-.892-.835 0-1.591.33-2.135.892Zm15.814 0a3.022 3.022 0 0 0-.892 2.135c0 .834.33 1.59.892 2.134.544.543 1.3.893 2.135.893.834 0 1.59-.33 2.134-.893.543-.543.893-1.3.893-2.134 0-.835-.33-1.591-.893-2.135a3.022 3.022 0 0 0-2.134-.892c-.835 0-1.591.33-2.135.892Z" />
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

const streamlitIcon = (
  <svg viewBox="0 -68 301 233">
    <path d="M150.731 101.547L98.1387 73.7471L6.84674 25.4969C6.7634 25.4136 6.59674 25.4136 6.51341 25.4136C3.18007 23.8303 -0.236608 27.1636 1.0134 30.497L47.5302 149.139L47.5385 149.164C47.5885 149.281 47.6302 149.397 47.6802 149.514C49.5885 153.939 53.7552 156.672 58.2886 157.747C58.6719 157.831 58.9461 157.906 59.4064 157.998C59.8645 158.1 60.5052 158.239 61.0552 158.281C61.1469 158.289 61.2302 158.289 61.3219 158.297H61.3886C61.4552 158.306 61.5219 158.306 61.5886 158.314H61.6802C61.7386 158.322 61.8052 158.322 61.8636 158.322H61.9719C62.0386 158.331 62.1052 158.331 62.1719 158.331V158.331C121.084 164.754 180.519 164.754 239.431 158.331V158.331C240.139 158.331 240.831 158.297 241.497 158.231C241.714 158.206 241.922 158.181 242.131 158.156C242.156 158.147 242.189 158.147 242.214 158.139C242.356 158.122 242.497 158.097 242.639 158.072C242.847 158.047 243.056 158.006 243.264 157.964C243.681 157.872 243.87 157.806 244.436 157.611C245.001 157.417 245.94 157.077 246.527 156.794C247.115 156.511 247.522 156.239 248.014 155.931C248.622 155.547 249.201 155.155 249.788 154.715C250.041 154.521 250.214 154.397 250.397 154.222L250.297 154.164L150.731 101.547Z" />
    <path d="M294.766 25.4981H294.683L203.357 73.7483L254.124 149.357L300.524 30.4981V30.3315C301.691 26.8314 298.108 23.6648 294.766 25.4981" />
    <path d="M155.598 2.55572C153.264 -0.852624 148.181 -0.852624 145.931 2.55572L98.1389 73.7477L150.731 101.548L250.398 154.222C251.024 153.609 251.526 153.012 252.056 152.381C252.806 151.456 253.506 150.465 254.123 149.356L203.356 73.7477L155.598 2.55572Z" />
  </svg>
)

const threeIcon = (
  <svg fill="none" stroke-linecap="square" stroke-miterlimit="10" viewBox="0 0 226.77 226.77">
    <g transform="translate(8.964 4.2527)" fill-rule="evenodd" stroke="black" stroke-linecap="butt" stroke-linejoin="round" stroke-width="4">
      <path d="m63.02 200.61-43.213-174.94 173.23 49.874z" />
      <path d="m106.39 50.612 21.591 87.496-86.567-24.945z" />
      <path d="m84.91 125.03-10.724-43.465 43.008 12.346z" />
      <path d="m63.458 38.153 10.724 43.465-43.008-12.346z" />
      <path d="m149.47 62.93 10.724 43.465-43.008-12.346z" />
      <path d="m84.915 125.06 10.724 43.465-43.008-12.346z" />
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

export default function Skill({ langColors, pageIndex, transDirect, setPage }: SkillProps): JSX.Element {
  return (
    <Layout pageIndex={pageIndex} transDirect={transDirect} setPage={setPage} title="skill">
      <TextBox enableMargins={[false, true]} proportion={50}>
        <h2>language</h2>
        <p>{downIcon} bytes in GitHub public repositories</p>
        <LangBars colors={langColors} />
      </TextBox>

      <TextBox enableMargins={[true, false]} proportion={50}>
        <h2><span className={styles.frameworkHeader}>Framework and Tool</span></h2>
        <FrameworkGrid>
          <FrameworkTile color="#092e20" icon={djangoIcon} name="Django" url="https://www.djangoproject.com/" />
          <FrameworkTile color="black" icon={flaskIcon} name="Flask" url="https://flask.palletsprojects.com/" />
          <FrameworkTile color="#ff4b4b" icon={streamlitIcon} name="Streamlit" url="https://streamlit.io/" />
          <FrameworkTile color="#f05732" icon={pyTorchIcon} name="PyTorch" url="https://pytorch.org/" />
          <FrameworkTile color="#792de4" icon={pyTorchLightningIcon} name="PyTorch Lightning" url="https://www.pytorchlightning.ai/" />
          <FrameworkTile color="#028cf0" icon={rayIcon} name="Ray.io" url="https://www.ray.io/" />
          <FrameworkTile color="#61dafb" icon={reactIcon} name="React / React Native" url="https://ja.reactjs.org/" />
          <FrameworkTile color="black" icon={nextIcon} name="Next.js" url="https://nextjs.org/" />
          <FrameworkTile color="black" icon={expoIcon} name="Expo" url="https://expo.dev/" />
          <FrameworkTile color="black" icon={threeIcon} name="Three.js" url="https://threejs.org/" />
          <FrameworkTile color="#2496ed" icon={dockerIcon} name="Docker" url="https://www.docker.com/" />
          <FrameworkTile color="#255787" icon={blenderIcon} name="Blender" url="https://www.blender.org/" />
          <FrameworkTile color="midnightblue" icon={daVinciResolveIcon} name="DaVinci Resolve" url="https://www.blackmagicdesign.com/jp/products/davinciresolve/" />
          <FrameworkTile color="black" icon={unityIcon} name="Unity" url="https://unity.com/ja/" />
        </FrameworkGrid>
      </TextBox>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const res = await fetch("https://raw.githubusercontent.com/ozh/github-colors/master/colors.json")
  const langColors = await res.json()

  return {props: {langColors: langColors}}
}
