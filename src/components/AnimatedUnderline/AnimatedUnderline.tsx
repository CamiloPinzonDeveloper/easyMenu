import styles from './AnimatedUnderline.module.scss';

interface Props {
  text?: string;
  color?: string;
  duration?: string;
  className?: string;
  bottom?: 'bottom-xl' | 'bottom-lg' | 'bottom-md' | 'bottom-sm' | 'bottom-xs';
}

export default function AnimatedUnderline({
  text = 'Menús digitales',
  color = '#283566',
  duration = '1s',
  className = '',
  bottom = 'bottom-xs',
}: Props) {
  const style = {
    '--stroke-color': color,
    '--animation-duration': duration,
    '--bottom':
      bottom === 'bottom-xl'
        ? '-1em'
        : bottom === 'bottom-lg'
          ? '-0.8em'
          : bottom === 'bottom-md'
            ? '-0.6em'
            : bottom === 'bottom-sm'
              ? '-0.4em'
              : bottom === 'bottom-xs'
                ? '-0.2em'
                : '-0.2em',
  } as Record<string, string>;
  return (
    <span className={styles.underline}>
      <strong
        className={styles.underlinedWord}
        style={{ color: color } as React.CSSProperties}
      >{`${text}`}</strong>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        className={`${styles.underlineSvg} ${className}`}
        style={style}
      >
        <path
          d="M9.3,127.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2C380.1,129.6,181.2,130.6,70,139 
        c82.6-2.9,254.2-1,335.9,1.3c-56,1.4-137.2-0.3-197.1,9"
          fill="none"
          stroke="var(--stroke-color)"
          strokeWidth="8"
        />
      </svg>
    </span>
  );
}
