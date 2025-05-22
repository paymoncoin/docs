import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'کاربرد آسان',
    Svg: require('@site/static/img/easy.svg').default,
    description: (
      <>
        پیمان یک رمز ارز ملی معادل تومان ایران است که برای مبادلات مالی روزمره به صورت غیرمتمرکز و شفاف ایجاد شده است.
      </>
    ),
  },
  {
    title: 'دارای پشتوانه ۱۰۰ درصد دلار',
    Svg: require('@site/static/img/backed.svg').default,
    description: (
      <>
        سیستم پیمان دارای پشتوانه دلاری است. برای همین خلق پول بدون پشتوانه در سامانه پیمان امکان پذیر نیست.
      </>
    ),
  },
  {
    title: 'کاملا غیرمتمرکز',
    Svg: require('@site/static/img/decentralized.svg').default,
    description: (
      <>
        پیمان بر بستر بلاکچین پیاده سازی شده و امکان مبادلات مالی امن، شفاف و بدون محدودیت را امکان‌پذیر می‌کند.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
