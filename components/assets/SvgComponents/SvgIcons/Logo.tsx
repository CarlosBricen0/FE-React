import React from 'react'
import { SvgComponentProps } from '.'

export const Logo = ({
  color,
  sizemap,
  ...props
}: SvgComponentProps): React.ReactElement => {
  return (
    <svg
      {...props}
      fill={color}
      height={`${sizemap}px`}
      viewBox='0 0 50 60'
      width={`${sizemap}px`}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M47.928 33.975c-4.343 2.906-12.976 2.712-12.485-7.838l.19-4.105c.069-1.45.135-2.86.208-4.455.13-2.926-3.583-2.98-4.022-.682-.202 1.046-.344 2.29-.497 3.627-.665 5.827-1.528 13.383-8.39 13.617-7.636.257-6.977-10.294-6.6-16.334.044-.714.085-1.365.107-1.928l.023-.51c.095-2.018.178-3.789-1.929-4.047-2.5-.31-2.993 5.05-3.16 6.87l-.027.277c-.621 6.221-.479 17.556 7.422 19.31 4.438.986 10.378-.71 12.676-7.965h.348c.454 5.025 4.996 7.702 9.5 7.702 3.05 0 5.756-1.41 6.636-2.558v.996c-.003 6.613-5.363 11.974-11.977 11.977H11.988C5.37 47.931.004 42.57 0 35.953V11.984A11.984 11.984 0 0111.988 0H35.95c6.616.003 11.978 5.368 11.977 11.984v21.991zM.504 53.078v3.641h.003a5.2 5.2 0 00.184 1.477c.104.382.305.73.584 1.01.286.278.638.478 1.022.582.488.136.993.2 1.5.19a4.23 4.23 0 001.286-.175 2.49 2.49 0 00.959-.558c.31-.28.537-.641.652-1.043.129-.483.187-.983.175-1.483v-3.641c0-.315-.072-.545-.217-.703a.722.722 0 00-.558-.226.712.712 0 00-.551.227c-.14.157-.205.387-.205.702v3.755c0 .645-.129 1.127-.375 1.447-.247.321-.67.48-1.269.48-.43 0-.768-.077-1.01-.235a1.234 1.234 0 01-.505-.661 3.47 3.47 0 01-.142-1.063v-3.723c0-.31-.066-.542-.207-.699a.727.727 0 00-.568-.229.705.705 0 00-.551.23c-.137.156-.207.389-.207.698zM14.286 55.407v3.642c0 .309-.071.544-.207.7a.787.787 0 01-1.118 0c-.142-.155-.208-.39-.208-.7v-3.724a3.36 3.36 0 00-.146-1.062 1.209 1.209 0 00-.5-.658c-.239-.16-.58-.238-1.01-.238-.6 0-1.023.158-1.273.481-.25.323-.368.8-.368 1.446v3.755c0 .312-.067.546-.207.701a.707.707 0 01-.552.23.735.735 0 01-.57-.23c-.138-.155-.213-.389-.213-.702v-3.641a5.306 5.306 0 01.175-1.479c.118-.401.344-.763.652-1.046.276-.252.603-.44.96-.551a4.198 4.198 0 011.286-.175 5.35 5.35 0 011.5.184c.786.2 1.402.81 1.61 1.593.133.48.195.978.184 1.476l.005-.002zM15.72 53.079v5.964h.002c0 .308.072.543.217.702.14.153.338.238.546.234a.735.735 0 00.56-.233c.142-.155.213-.39.213-.704v-5.964c0-.316-.07-.546-.213-.703a.746.746 0 00-.56-.225.706.706 0 00-.552.23c-.142.155-.213.389-.213.699z'
        fill={color}
      />
      <path
        clipRule='evenodd'
        d='M33.294 59.85c-.375 0-.482-.276-.482-.276l-.81-2.08h-3.438l-.802 2.076s-.117.276-.485.276c-.34 0-.286-.226-.277-.266l.002-.005 2.803-6.975a.603.603 0 011.047 0l2.73 6.974s.087.276-.288.276zm-3-6.833l-1.51 3.87h2.974l-1.464-3.87z'
        fill={color}
        fillRule='evenodd'
      />
      <path
        d='M25.197 52.582c.034-.074.177-.285.65-.285.496 0 .52.384.52.384v6.81a.361.361 0 11-.723 0v-6.167h-.018l-2.454 6.198a.526.526 0 01-.475.327.514.514 0 01-.46-.327l-2.463-6.198h-.022v6.164a.356.356 0 01-.357.358.36.36 0 01-.36-.358v-6.807s.035-.384.522-.384c.488 0 .622.225.65.292l2.497 6.33 2.493-6.337z'
        fill={color}
      />
      <path
        clipRule='evenodd'
        d='M39.36 58.951c0-.105-.007-.198-.015-.276h.005c-.019-.269-.044-.534-.07-.798a2.175 2.175 0 00-.205-.709 1.22 1.22 0 00-.443-.505c-.191-.124-.459-.18-.795-.169h-2.73v2.992a.359.359 0 01-.367.358.354.354 0 01-.355-.358v-6.93a.253.253 0 01.276-.261h3.18c.3-.004.597.035.885.114.263.07.51.191.727.357.213.162.384.373.498.615.13.275.193.577.184.88.012.445-.117.882-.368 1.249-.252.354-.617.576-1.103.68v.016c.216.026.425.093.615.198.157.092.291.217.393.368.104.156.18.329.224.511a3.79 3.79 0 01.095.7l.005.086c.005.092.011.196.015.31.005.184.02.368.036.552a3.467 3.467 0 00.133.618v.001l.015.042s.066.255-.297.255-.455-.255-.455-.255a2.6 2.6 0 01-.065-.419 2.234 2.234 0 01-.017-.222zm-1.572-3.065c.214 0 .427-.034.63-.104l-.005.004c.189-.063.363-.162.515-.29.32-.266.499-.664.487-1.08 0-.47-.136-.834-.401-1.103-.266-.27-.68-.403-1.231-.403h-2.68v2.976h2.685z'
        fill={color}
        fillRule='evenodd'
      />
      <path
        d='M46.655 57.52s.072-.323.445-.19h.008s.287.072.253.308c-.051.204-.12.403-.208.594a2.84 2.84 0 01-1.6 1.555 3.339 3.339 0 01-1.21.212 3.545 3.545 0 01-1.563-.325 3.227 3.227 0 01-1.12-.865c-.298-.37-.524-.794-.663-1.248a4.89 4.89 0 01-.222-1.49 4.947 4.947 0 01.222-1.495c.14-.455.366-.88.664-1.252a3.228 3.228 0 011.12-.864 3.791 3.791 0 012.61-.162c.335.103.65.262.93.47a2.66 2.66 0 01.797.951.291.291 0 01-.156.44c-.42.156-.512-.162-.512-.162v.01a2.136 2.136 0 00-.637-.774 2.364 2.364 0 00-.682-.36 2.523 2.523 0 00-.788-.123 2.723 2.723 0 00-1.292.284c-.348.18-.65.44-.882.756-.233.32-.405.68-.506 1.063a4.492 4.492 0 000 2.426c.1.385.272.748.506 1.07.233.316.534.575.882.757.401.199.845.297 1.292.285a2.207 2.207 0 001.673-.704c.21-.226.38-.486.503-.769.048-.127.094-.257.136-.398z'
        fill={color}
      />
      <path
        clipRule='evenodd'
        d='M50.702 59.175c0-.02 0-.12-.008-.184v-.002c-.018-.278-.11-.386-.294-.386h-.607v.687a.079.079 0 01-.08.078.073.073 0 01-.064-.078l-.007-1.563a.05.05 0 01.058-.057h.672c.243 0 .493.157.493.45 0 .372-.314.408-.314.408.093.01.286.081.286.367-.003.145.014.29.05.43 0 .021-.013.043-.064.043-.1 0-.107-.057-.121-.193zm-.908-.703h.571c.2 0 .35-.122.35-.322a.323.323 0 00-.35-.337h-.571v.658z'
        fill={color}
        fillRule='evenodd'
      />
      <path
        clipRule='evenodd'
        d='M48.795 58.526a1.47 1.47 0 112.942 0 1.47 1.47 0 01-2.942 0zm.144 0a1.326 1.326 0 101.322-1.33 1.333 1.333 0 00-1.322 1.33z'
        fill={color}
        fillRule='evenodd'
      />
    </svg>
  )
}
