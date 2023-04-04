import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Integrations from '../../../static/img/Integrations.png';
import Configurator from '../../../static/img/Configurator.png';
import Blocks from '../../../static/img/Blocks.png';

const FeatureList = [
  {
    title: 'Compact & technological',
    Svg: Blocks,
    description: (
      <>
        Full of technologies in each mm².
        High density of possibilities in compact dimensions.
      </>
    ),
  },
  {
    title: 'Unlimited integrations',
    Svg: Integrations,
    description: (
      <>
        Wide standards, interfaces and APIs supporting - unlimited integration abilities.
      </>
    ),
  },
  {
    title: 'Free cross-platform software',
    Svg: Configurator,
    description: (
      <>
        Configurator is the only one soft you need for your CONNECT Smart home configuring.
        Windows/macOS/Linux
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Svg}/>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
