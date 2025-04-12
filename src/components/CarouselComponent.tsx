
import { Carousel } from 'primereact/carousel'; // Import the carousel from PrimeReact
import 'primereact/resources/themes/lara-light-indigo/theme.css';  // Import your theme
import 'primereact/resources/primereact.min.css';  // Core PrimeReact styles
import 'primeicons/primeicons.css';  // Optional: Icons used by PrimeReact

import './CarouselComponent.css';  // Import custom CSS for the component
import ProjectList from './ProjectList';  // Import ProjectList from the other file
import '../styles/project.css'

const CarouselComponent = () => {

    interface Product {
        image: string;
        title: string;
        description: string;
        repo: string;
        demo?: string;
    }

    const productTemplate = (product: Product) => {
        return (
            <div className="product-item">
                <img src={product.image} alt={product.title} className="product-image" />
                <div className="button-container">
                    <a href={product.repo} target="_blank" rel="noopener noreferrer" className="show-more">Repo</a>
                    {product.demo && (
                        <a href={product.demo} target="_blank" rel="noopener noreferrer" className="show-more">Demo</a>
                    )}
                </div>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
            </div>
        );
    };

    return (
        <div className="carousel-container">
            <div className="card">
                <h5>Project Carousel</h5>
                <Carousel 
                    value={ProjectList()}  // Call ProjectList to get the array
                    numVisible={1} 
                    numScroll={1} 
                    orientation="horizontal"
                    itemTemplate={productTemplate} 
                  
                />
            </div>
        </div>
    );
};

export default CarouselComponent;
