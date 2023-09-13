import { Link } from 'components/link';
import Image from 'next/image';

export default function Logo({ src, ...rest }) {
  return (
    <Link
      path="/"
      style={{
        variant: 'links.logo',
        display: 'flex',
        cursor: 'pointer',
        mr: 15,
        zoom: '0.8',
      }}
      {...rest}
    >
      <Image src={src} alt="startup landing logo" />
    </Link>
  );
}
