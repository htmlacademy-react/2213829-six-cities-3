import {OffersListType} from '../mocks/offers-list';


interface DataList{
  offersListData: OffersListType[];
}

const OffersList = ({offersListData}: DataList): JSX.Element => (
  <div className="container">
    <section className="near-places places">

      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        <article className="near-places__card place-card">
          {offersListData.map((el)=>(
            <>
              <div className="near-places__image-wrapper place-card__image-wrapper" key={'img'}>
                <a href="#">
                  <img className="place-card__image" src={el.previewImage} width="260" height="200" alt="Place image"/>
                </a>
              </div>
              <div className="place-card__info" key={'card'}>
                <div className="place-card__price-wrapper">
                  <div className="place-card__price">
                    <b className="place-card__price-value">{el.price}</b>
                    <span className="place-card__price-text">&#47;&nbsp;night</span>
                  </div>
                  <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                    <svg className="place-card__bookmark-icon" width="18" height="19" >
                      <use href="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">In bookmarks</span>
                  </button>
                </div>
                <div className="place-card__rating rating">
                  <div className="place-card__stars rating__stars">
                    <span style={{width: '80%'}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <h2 className="place-card__name">
                  <a href="#">{el.title}</a>
                </h2>
                <p className="place-card__type">{el.type}</p>
              </div>
            </>
          ))}


        </article>


      </div>
    </section>
  </div>
);
export default OffersList;
