import React from 'react';
import './App.css';

interface Props {}
interface State {
    image: any,
    countdown: number | null
}

class ShrekApp extends React.Component<Props, State> {
    state: State = {
        image: null,
        countdown: 3
    }

    shrekImages = [
        'shrek1.jpg',
        'shrek2.jpg',
        'shrek3.jpg',
        // add more images here
    ];

    handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedImage = e.target.files![0];
        this.setState({ image: selectedImage });

        let count = 3;
        const intervalId = setInterval(() => {
            this.setState({ countdown: count });
            count--;
            if (count < 0) {
                clearInterval(intervalId);
                this.setState({ countdown: null });
            }
        }, 1000);
    }

    handleRandomImage = () => {
        const randomIndex = Math.floor(Math.random() * this.shrekImages.length);
        const randomImage = this.shrekImages[randomIndex];
        return randomImage;
    }

    render() {
        return (
            <div>
                <input type="file" onChange={this.handleImageSelect} />
                {this.state.image && <img src={URL.createObjectURL(this.state.image)} alt="Selected Image" />}
                {this.state.countdown && <p>{this.state.countdown}</p>}
                {!this.state.countdown && <img src={this.handleRandomImage()} alt="Random Shrek Image" />}
            </div>
        );
    }
}

export default ShrekApp;
