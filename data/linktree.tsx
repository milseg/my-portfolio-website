export type igMapNode = { readonly relativePath: string, readonly publicURL: string | null, readonly childImageSharp: { readonly gatsbyImageData: import('gatsby-plugin-image').IGatsbyImageData } | null }

type LinkTreeDataType = Array<{
  href: string;
  id: string;
  title: string;
  alt: string;
  image: igMapNode | null;
}>

export let linkTreeData: LinkTreeDataType = [
  {
    href: 'https://www.youtube.com/watch?v=gqwPa9SxEb0',
    id: 'video',
    title: 'now magic demo (portfolio)',
    alt: 'Now Magic Demo',
    image: null
  },
  {
    href: 'https://res.cloudinary.com/upwork-fp/video/upload/c_scale,w_1000,q_auto/v1712277131/profile/portfolio/1630219159540244480/pdc87nzjgtjxlcyos4xp.mp4',
    id: 'code',
    title: 'smart contracts royalties standard demo pt I (portfolio)',
    alt: 'Smart Contracts Part I',
    image: null
  },{
    href: 'https://res.cloudinary.com/upwork-fp/video/upload/c_scale,w_1000,q_auto/v1712277184/profile/portfolio/1630219159540244480/a6tazyrih6b4nsjgf8qh.mp4',
    id: 'code',
    title: 'smart contracts royalties standard demo pt II (portfolio)',
    alt: 'Smart Contracts Part II',
    image: null
  },{
    href: 'https://res.cloudinary.com/upwork-fp/video/upload/c_scale,w_1000,q_auto/v1712333039/profile/portfolio/1630219159540244480/tluumclkwxekzxsziuww.mp4',
    id: 'video',
    title: 'workflow automation presentation intro (portfolio)',
    alt: 'Workflow Automation Intro',
    image: null
  },{
    href: 'https://res.cloudinary.com/upwork-fp/video/upload/c_scale,w_1000,q_auto/v1710959398/profile/portfolio/1630219159540244480/t34zrzb1cvw6il4o8l2s.mp4',
    id: 'video',
    title: 'workflow automation presentation pt I (portfolio)',
    alt: 'Workflow Automation Part I',
    image: null
  },{
    href: 'https://res.cloudinary.com/upwork-fp/video/upload/c_scale,w_1000,q_auto/v1710959496/profile/portfolio/1630219159540244480/f8njrtmtlegequeluuht.mp4',
    id: 'video',
    title: 'Workflow automation presentation pt II (portfolio)',
    alt: 'Workflow Automation Part II',
    image: null
  },{
    href: 'https://play.google.com/store/apps/details?id=com.aiboo.food',
    id: 'playstore',
    title: 'aiboo delivery play store (portfolio)',
    alt: 'Aiboo Delivery Play Store',
    image: null
  },{
    href: 'https://apps.apple.com/br/app/aiboo-delivery-de-comida/id1133000808',
    id: 'appstore',
    title: 'aiboo delivery app store (portfolio)',
    alt: 'Aiboo Delivery App Store',
    image: null
  },{
    href: 'https://t.me/milsegdev',
    id: 'telegram',
    title: 'My Telegram (contact me)',
    alt: 'Milton\'s Telegram',
    image: null
  },{
    href: 'https://www.linkedin.com/in/milton-correia-01b1326b/',
    id: 'linkedin',
    title: 'My Linkedin',
    alt: 'Milton\'s Linkedin',
    image: null
  },{
    href: 'https://github.com/milseg/my-portfolio-website',
    id: 'github',
    title: 'This website source code',
    alt: 'Web Developer Portfolio GatsbyJS',
    image: null
  }

];


export default linkTreeData;
