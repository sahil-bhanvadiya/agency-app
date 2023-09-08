import Image from 'next/image';

export default function Img({ src, ...rest }) {
return <Image src={src} {...rest} />;
}
