import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Facil de usar',
    Svg: require('../../static/img/facil.svg').default,
    description: (
      <>
        Recipever fue diseñado para encontrar nuevas recetas y organizar las propias 
        de una manera sencilla e intuitiva
      </>
    ),
  },
  {
    title: 'Todo en un solo lugar',
    Svg: require('../../static/img/all.svg').default,
    description: (
      <>
        Puede utilizar Recipever para encontrar, organizar, consultar, guardar sus recetas en un solo lugar. 
      </>
    ),
  },
  {
    title: 'Olvidese de las recetas fisicas',
    Svg: require('../../static/img/lost.svg').default,
    description: (
      <>
        No tendrá que almacenar recetarios físicos que nunca se utilizan y nunca volverá a perder una receta que vio en la web
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
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
