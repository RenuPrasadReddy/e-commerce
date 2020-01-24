import React from 'react';
import * as THREE from 'three';

export default class DisplayDetails extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    componentDidMount() {
        var loader = new THREE.ImageLoader();

        // load a image resource
        loader.load(
            // resource URL
            '../../public/P1.glb',

            // onLoad callback
            function (image) {
                // use the image, e.g. draw part of it on a canvas
                var canvas = document.createElement('canvas');
                var context = canvas.getContext('2d');
                context.drawImage(image, 100, 100);
            },

            // onProgress callback currently not supported
            undefined,

            // onError callback
            function (err) {
                console.error('An error happened.', err);
            }
        );
    }
    render() {
        return (
            <div>
                {/* <div>
                    Details of {this.props.item.name}
                </div>
                <div>
                    Weight: {this.props.item.netWeight}
                </div> */}
                hello

            </div>

        )
    }
}