import { useEffect, useState } from 'react';
import { addScript } from '../../libs/handleScript';

import stage from './models/stage/scene.glb';
import person1 from './models/cheering_avatar/scene.glb';
import person2 from './models/clapping_avatar/scene.glb';
import video from './video/video.mp4';
// import intellicon from './img/intellicon_1.jpg';

import carpet from './img/carpet.jpg';
import marble from './img/marble.jpg';
import image1 from './img/image01.jpeg';
import image2 from './img/image02.jpeg';
import image3 from './img/image03.jpeg';
import image4 from './img/image04.jpeg';
import image5 from './img/image05.jpeg';
import image6 from './img/image06.jpeg';
import image7 from './img/image07.jpeg';
import image8 from './img/image08.jpeg';
import image9 from './img/image09.jpeg';
import image10 from './img/image10.jpeg';

const AFRAME = window?.AFRAME;

const Gallery = () => {

  const [isWindowAframeReady, setIsWindowAframeReady] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const watchWindow = setInterval(() => {
      if (AFRAME) {
        setIsWindowAframeReady(true);
        clearInterval(watchWindow);
      };
    }, 500);
  }, []);

  useEffect(() => {
    if (isWindowAframeReady) {
    (async () => {
      await Promise.all([
        // addScript(
        //     'https://londonpark.xyz/extended-wasd-controls.js',
        //     'extended-wasd-controls'
        // ),
        // addScript(
        //     'https://londonpark.xyz/screen-controls-character.js',
        //     'screen-controls-character'
        // ),
        // addScript(
        //     'https://londonpark.xyz/extras.js',
        //     'extras'
        // ),
        addScript(
            'https://londonpark.xyz/particle.js',
            'particle-system'
        )
      ]);
      setIsInitialized(true);

    })();
  }
  }, [isWindowAframeReady]);

  if (!isInitialized) return <div>Loading...</div>;

  return (
    <div style={{ position: "absolute", height: "100%", width: "100%" }}>
    <a-scene 
      loading-screen="enabled: false"
      device-orientation-permission-ui="enabled: true"
      vr-mode-ui="enabled: false"
      background="color: #112" // color="linear-gradient(red, yellow)
      // background="color: #8108a6"
      // background="color: #212021"
      // stats
    >
      <a-assets> 
        <img id="carpet" src={carpet} alt="carpet" />
        <img id="floor" src={marble} alt="marble" />
        {/* <img id="floor" src={checkboard} alt="checkboard" /> */}
        <img id="image1" src={image1} alt="image1" />
        <img id="image2" src={image2} alt="image2" />
        <img id="image3" src={image3} alt="image3" />
        <img id="image4" src={image4} alt="image4" />
        <img id="image5" src={image5} alt="image5" />
        <img id="image6" src={image6} alt="image6" />
        <img id="image7" src={image7} alt="image7" />
        <img id="image8" src={image8} alt="image8" />
        <img id="image9" src={image9} alt="image9" />
        <img id="image10" src={image10} alt="image10" />
        <a-mixin
          id="box"
          geometry="primitive: box; depth: 0.125; height: 0.125; width: 0.125">
        </a-mixin>
        <a-mixin
          id="circle"
          geometry="primitive: circle; radius: 0.2; segments: 100; thetaStart: 0; thetaLength: 360">
        </a-mixin>
        <a-mixin
          id="cylinder"
          geometry="primitive: cylinder; radius: 0.2; height: 0.5; segmentsRadial: 50; segmentsHeight: 50; openEnded: true; thetaStart: 0; thetaLength: 360">
        </a-mixin>
        <a-mixin
          id="ring"
          geometry="primitive: ring; radiusInner: 0.3; radiusOuter: 0.5; segmentsTheta: 50">
        </a-mixin>
        <a-mixin id="sphere" geometry="primitive: sphere; radius: 0.1"></a-mixin>
        <a-mixin
          id="torus"
          geometry="primitive: torus; arc: 720; radius: 0.3; radiusTubular: 0.05; segmentsTubular: 10;">
        </a-mixin>
        <a-mixin
          id="torus-knot"
          geometry="primitive: torusKnot; p: 3; q: 7; radius: 0.25; segmentsRadial: 10; radiusTubular: 0.07; segmentsTubular: 32">
        </a-mixin>
        <a-mixin
          id="column"
          geometry="primitive: box; depth: 0.75; height: 1.2; width: 0.75"
          // material="color: #a0a5ad" // color: #FFF; // src: #carpet; // #a0a5ad
          material="src: #floor;"
          position="0 0.6 0">
        </a-mixin>
        <a-mixin
          id="column-bottom"
          geometry="primitive: box; depth: 1; height: 0.1; width: 1;"
          // material="color: #a0a5ad" // color: #FFF // src: #carpet; // #a0a5ad
          material="src: #floor;"
          position="0 0.1 0">
        </a-mixin>
        <a-mixin
          id="column-light"
          light="type: point; intensity: 0.2; distance: 5;" // intensity: 0.5;
          position="0 1.5 0">
        </a-mixin>
        <a-mixin id="object-on-column" position="0 1.2 0"></a-mixin>
        <a-mixin
          id="yoyo"
          animation__yoyo="dir: alternate; loop: true">
        </a-mixin>
        <a-mixin
          id="spin"
          animation__spin="property: object3D.rotation.y; to: 360; loop: true; easing: linear; dur: 10000">
        </a-mixin>
        <a-mixin
          id="spinX"
          mixin="spin"
          animation__spin="property: object3D.rotation.x">
        </a-mixin>
        <a-mixin id="color" material="color: #FFFFC3"></a-mixin>
        <a-mixin id="doubleside" material="side: double"></a-mixin>
      </a-assets>

      <a-camera position="0 1.6 4"></a-camera>
      <a-entity position="0 0.5 -15" particle-system="preset: dust; particleCount: 6000; color: #f0da1a; size:1.5"></a-entity>

      {/* #FFFFFF */}
      <a-entity light="type: ambient; color: #a0a5ad"></a-entity>
      <a-entity
        light="type: directional; color: #EEE" // #EEE // #a0a5ad // #dcdfe3
        position="0 1 1">
      </a-entity>

      <a-entity 
        geometry="primitive: cylinder; height: 0.2; radius: 30;" // radius: 12;
        material="color: #BABABA; src: #floor; metalness: 0.5; repeat: 50 20; roughness: 0.5" // repeat: 50 20;
        position="0 0 0">
      </a-entity>

      {/* CARPET */}
      {/* <a-entity
        geometry="primitive: box; depth: 20; height: 0.025; width: 2"
        material="color: #440000; metalness: 0; src: #carpet; repeat: 3 40; roughness: 1"
        position="0 0.2 0">
      </a-entity> */}

      <a-entity 
        position="-2.5 0 1"
      >
        <a-entity mixin="column">
          <a-entity mixin="column-light"></a-entity>
          <a-image 
            src="#image1"
            mixin="doubleside spin"
            position="0 1.3 0"
            height="1.2"
            width="0.9">
          </a-image>
        </a-entity>
        <a-entity mixin="column-bottom"></a-entity>
      </a-entity>

      <a-entity position="-2.5 0 -2">
        <a-entity mixin="column">
          <a-entity mixin="column-light"></a-entity>
          <a-image 
            src="#image2" 
            mixin="doubleside spin"
            position="0 1.3 0"
            height="1.2"
            width="0.9">
          </a-image>
        </a-entity>
        <a-entity mixin="column-bottom"></a-entity>
      </a-entity>

      <a-entity position="-2.5 0 -5">
        <a-entity mixin="column">
          <a-entity mixin="column-light"></a-entity>
          <a-image 
            src="#image3" 
            mixin="doubleside spin"
            position="0 1.3 0"
            height="1.2"
            width="0.9">
          </a-image>
        </a-entity>
        <a-entity mixin="column-bottom"></a-entity>
      </a-entity>

      <a-entity position="-2.5 0 -8">
        <a-entity mixin="column">
          <a-entity mixin="column-light"></a-entity>
          <a-image 
            src="#image4" 
            mixin="doubleside spin"
            position="0 1.3 0"
            height="1.2"
            width="0.9">
          </a-image>
        </a-entity>
        <a-entity mixin="column-bottom"></a-entity>
      </a-entity>

      <a-entity position="-2.5 0 -11">
        <a-entity mixin="column">
          <a-entity mixin="column-light"></a-entity>
          <a-image 
            src="#image5" 
            mixin="doubleside spin"
            position="0 1.3 0"
            height="1.2"
            width="0.9">
          </a-image>
        </a-entity>
        <a-entity mixin="column-bottom"></a-entity>
      </a-entity>

      <a-entity position="2.5 0 1">
        <a-entity mixin="column">
          <a-entity mixin="column-light"></a-entity>
          <a-image 
            src="#image6" 
            mixin="doubleside spin"
            position="0 1.3 0"
            height="1.2"
            width="0.9">
          </a-image>
        </a-entity>
        <a-entity mixin="column-bottom"></a-entity>
      </a-entity>

      <a-entity position="2.5 0 -2">
        <a-entity mixin="column">
          <a-entity mixin="column-light"></a-entity>
          <a-image 
            src="#image7" 
            mixin="doubleside spin"
            position="0 1.3 0"
            height="1.2"
            width="0.9">
          </a-image>
        </a-entity>
        <a-entity mixin="column-bottom"></a-entity>
      </a-entity>

      <a-entity position="2.5 0 -5">
        <a-entity mixin="column">
          <a-entity mixin="column-light"></a-entity>
          <a-image 
            src="#image8" 
            mixin="doubleside spin"
            position="0 1.3 0"
            height="1.2"
            width="0.9">
          </a-image>
        </a-entity>
        <a-entity mixin="column-bottom"></a-entity>
      </a-entity>

      <a-entity position="2.5 0 -8">
        <a-entity mixin="column">
          <a-entity mixin="column-light"></a-entity>
          <a-image 
            src="#image9" 
            mixin="doubleside spin"
            position="0 1.3 0"
            height="1.2"
            width="0.9">
          </a-image>
        </a-entity>
        <a-entity mixin="column-bottom"></a-entity>
      </a-entity>

      <a-entity position="2.5 0 -11">
        <a-entity mixin="column">
          <a-entity mixin="column-light"></a-entity>
          <a-image 
            src="#image10" 
            mixin="doubleside spin"
            position="0 1.3 0"
            height="1.2"
            width="0.9">
          </a-image>
        </a-entity>
        <a-entity mixin="column-bottom"></a-entity>
      </a-entity>

      {/* LONDON WORK END */}

      {/* DAVID WORK BEGIN */}


      {/* stage */}
      <a-entity 
      id="stage" 
      gltf-model={stage}
      scale="0.5 0.5 0.5" 
      position="0 0 -30">
      </a-entity>

      {/* audiences */}
      <a-entity 
      gltf-model={person1}
      scale="0.5 0.5 0.5"
      rotation="0 180 0" 
      position="-5 0 -20"
      animation-mixer="clip:mixamo.com">
      </a-entity>

      <a-entity 
      gltf-model={person1}
      scale="0.5 0.5 0.5"
      rotation="0 180 0" 
      position="-3 0 -17"
      animation-mixer="clip:mixamo.com">
      </a-entity>

      <a-entity 
      gltf-model={person1}
      scale="0.5 0.5 0.5"
      rotation="0 180 0" 
      position="1 0 -15"
      animation-mixer="clip:mixamo.com">
      </a-entity>

      <a-entity 
      gltf-model={person1}
      scale="0.5 0.5 0.5"
      rotation="0 180 0" 
      position="-2 0 -15"
      animation-mixer="clip:mixamo.com">
      </a-entity>

      <a-entity 
      gltf-model={person1}
      scale="0.5 0.5 0.5"
      rotation="0 180 0" 
      position="-2 0 -15"
      animation-mixer="clip:mixamo.com">
      </a-entity>

      <a-entity 
      gltf-model={person2}
      scale="0.5 0.5 0.5"
      rotation="0 180 0" 
      position="-7 0 -15"
      animation-mixer="clip:mixamo.com">
      </a-entity>

      <a-entity 
      gltf-model={person2}
      scale="0.5 0.5 0.5"
      rotation="0 180 0" 
      position="4 0 -19"
      animation-mixer="clip:mixamo.com">
      </a-entity>

      <a-entity 
      gltf-model={person2}
      scale="0.5 0.5 0.5"
      rotation="0 180 0" 
      position="6 0 -20"
      animation-mixer="clip:mixamo.com">
      </a-entity>

      <a-video
        width="10" height="5.6"
        src={video}
        position="0 3 -28">
      </a-video>

    </a-scene>
    </div>
  )
};

export default Gallery;
