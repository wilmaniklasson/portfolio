import { Carousel } from 'primereact/carousel'; 
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css'; 
import 'primeicons/primeicons.css';
import './CarouselComponent.css';
import ProjectList from './ProjectList';
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
                    value={ProjectList()}
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
