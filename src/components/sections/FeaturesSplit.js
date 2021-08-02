import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Game that helps',
    // paragraph: 'Station0x is a game built on top of NFT marketplace. Its designed to incentivize astronauts to promote and help creators sell their work.'
    paragraph: 'Station0x is a space-themed NFT market that introduces Astronauts, a third-party in  NFT sales. Astronauts are incentivized to match buyers with sellers and maximize trading volumes.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  For Creators
                  </div>
                <h3 className="mt-0 mb-12">
                  Create compelling artwork
                  </h3>
                <p className="m-0">
                  Do what you love to do, create amazing NFTS and list it on Station0x. The game provides you with people that aligned to help you sell the artwork you create. No need to worry about it, just focus on your amazing creative process.
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <div className="video-split">
                  <video
                    title="creators"
                    loop={'true'}
                    style={{ marginTop:'-140px' }}
                    autoPlay
                    loop
                    controls={false}
                    muted
                  >
                    <source src="https://res.cloudinary.com/station0x/video/upload/q_auto:good/f_auto/v1627399817/creator_ktflc5.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  For Collectors
                  </div>
                <h3 className="mt-0 mb-12">
                  Enjoy your true ownership of the NFTs
                  </h3>
                <p className="m-0">
                  Don't let us or others pull the rug on your NFTs. All of the NFTs listed in Station0x are stored persistently and permanently on IPFS. No one can alter or censor the artwork you own, even the creator.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <div className="video-split-wide">
                  <video
                    title="creators"
                    loop={'true'}
                    style={{ 
                      marginTop:'', 
                      minW: '100%', 
                      minHeight: '100%'
                    }}
                    autoPlay
                    loop
                    controls={false}
                    muted
                  >
                    <source src="https://res.cloudinary.com/station0x/video/upload/q_auto:good/f_auto/v1627566345/new%20landing/collector_ncvh5v.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  For Astronauts
                  </div>
                <h3 className="mt-0 mb-12">
                  Create your own strategy to get rewarded
                  </h3>
                <p className="m-0">
                  Be an early adopter, Be an astronaut.
                  Own spaceships you need, help creators sell their art and compete with other stations to maximize your profits.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <div className="video-split">
                  <video
                    title="creators"
                    loop={'true'}
                    style={{ marginTop:'-140px' }}
                    autoPlay
                    loop
                    controls={false}
                    muted
                  >
                    <source src="https://res.cloudinary.com/station0x/video/upload/q_auto:good/f_auto/v1627399815/landing_w7ny2c.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;