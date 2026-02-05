// 'use client';

// import Image from 'next/image';
// import styles from './NoticesItem.module.css';
// import { Notice } from '@/types/notice';

// interface Props {
//   notice: Notice;
// }

// export const NoticesItem = ({ notice }: Props) => {
//   const isAuth = false; // з auth store

//   const handleLearnMore = () => {
//     if (!isAuth) {
//       // open ModalAttention
//       return;
//     }
//     // open ModalNotice
//   };

//   const toggleFavorite = () => {
//     if (!isAuth) {
//       // ModalAttention
//       return;
//     }
//     // POST /favorites
//   };

//   return (
//     <li className={styles.card}>
//       <Image
//         src={notice.imgURL}
//         alt={notice.title}
//         width={300}
//         height={200}
//         className={styles.image}
//       />

//       <h3>{notice.title}</h3>
//       <p>{notice.comment}</p>

//       <div className={styles.actions}>
//         <button onClick={handleLearnMore}>Learn more</button>
//         <button onClick={toggleFavorite}>❤</button>
//       </div>
//     </li>
//   );
// };


// 'use client';

// import Image from 'next/image';
// import styles from './NoticesItem.module.css';
// import { Notice } from '@/types/notice';
// import clsx from 'clsx';

// interface Props {
//   notice: Notice;
//   isAuth: boolean;
//   onOpenAttention: () => void;
//   onOpenNotice: (id: string) => void;
//   onToggleFavorite: (id: string) => Promise<void>;
// }

// export const NoticesItem = ({
//   notice,
//   isAuth,
//   onOpenAttention,
//   onOpenNotice,
//   onToggleFavorite,
// }: Props) => {
//   const {
//     _id,
//     title,
//     imgURL,
//     popularity,
//     name,
//     birthday,
//     sex,
//     species,
//     category,
//     comment,
//     price,
//     isFavorite,
//   } = notice;

//   const handleLearnMore = () => {
//     if (!isAuth) {
//       onOpenAttention();
//       return;
//     }
//     onOpenNotice(_id);
//   };

//   const handleFavorite = async () => {
//     if (!isAuth) {
//       onOpenAttention();
//       return;
//     }
//     await onToggleFavorite(_id);
//   };

//   return (
//     <li className={styles.card}>
//       <div className={styles.imageWrapper}>
//         <Image
//           src={imgURL}
//           alt={title}
//           fill
//           sizes="
//             (max-width: 374px) 100vw,
//             (max-width: 767px) 335px,
//             (max-width: 1279px) 342px,
//             344px
//           "
//           priority={false}
//           className={styles.image}
//         />

//         <button
//           type="button"
//           className={clsx(styles.favoriteBtn, {
//             [styles.active]: isFavorite,
//           })}
//           onClick={handleFavorite}
//           aria-label="Add to favorite"
//         >
//           <svg className={styles.iconHeart}>
//             <use href="/sprites/icons.svg#icon-heart-circle" />
//           </svg>
//         </button>
//       </div>

//       <div className={styles.content}>
//         <div className={styles.titleRow}>
//           <h3 className={styles.title}>{title}</h3>

//           <div className={styles.rating}>
//             <svg className={styles.iconStar}>
//               <use href="/sprites/icons.svg#icon-star" />
//             </svg>
//             <span>{popularity}</span>
//           </div>
//         </div>

//         <ul className={styles.meta}>
//           <li>
//             <span>Name</span>
//             <span>{name}</span>
//           </li>
//           <li>
//             <span>Birthday</span>
//             <span>{birthday}</span>
//           </li>
//           <li>
//             <span>Sex</span>
//             <span>{sex}</span>
//           </li>
//           <li>
//             <span>Species</span>
//             <span>{species}</span>
//           </li>
//           <li>
//             <span>Category</span>
//             <span>{category}</span>
//           </li>
//         </ul>

//         <p className={styles.comment}>{comment}</p>

//         <div className={styles.footer}>
//           <span className={styles.price}>${price}</span>

//           <button
//             type="button"
//             className={styles.learnMore}
//             onClick={handleLearnMore}
//           >
//             Learn more
//           </button>
//         </div>
//       </div>
//     </li>
//   );
// };
'use client';

import Image from 'next/image';
import styles from './NoticesItem.module.css';
import clsx from 'clsx';
import { NoticeCard } from '@/types/notice';

interface Props {
  notice: NoticeCard;
  isAuth: boolean;
  onOpenAttention: () => void;
  onOpenNotice: (id: string) => void;
  onToggleFavorite: (id: string) => Promise<void>;
}

export const NoticesItem = ({
  notice,
  isAuth,
  onOpenAttention,
  onOpenNotice,
  onToggleFavorite,
}: Props) => {
  const {
    _id,
    title,
    imgURL,
    popularity,
    name,
    birthday,
    sex,
    species,
    category,
    comment,
    isFavorite,
  } = notice;

  const handleLearnMore = () => {
    if (!isAuth) {
      onOpenAttention();
      return;
    }
    onOpenNotice(_id);
  };

  const handleFavorite = async () => {
    if (!isAuth) {
      onOpenAttention();
      return;
    }
    await onToggleFavorite(_id);
  };

  return (
    <li className={styles.card}>
      {/* IMAGE */}
      <div className={styles.imageWrapper}>
        <Image
          src={imgURL}
          alt={title}
          fill
          sizes="
            (max-width: 374px) 100vw,
            (max-width: 767px) 335px,
            (max-width: 1279px) 342px,
            344px
          "
          className={styles.image}
        />

        <button
          type="button"
          className={clsx(styles.favoriteBtn, {
            [styles.active]: isFavorite,
          })}
          onClick={handleFavorite}
          aria-label="Add to favorite"
        >
          <svg className={styles.iconHeart}>
            <use href="/sprite.svg#icon-heart-circle" />
          </svg>
        </button>
      </div>

      {/* CONTENT */}
      <div className={styles.content}>
        <div className={styles.titleRow}>
          <h3 className={styles.title}>{title}</h3>

          <div className={styles.rating}>
            <svg className={styles.iconStar}>
              <use href="/sprite.svg#icon-star" />
            </svg>
            <span>{popularity}</span>
          </div>
        </div>

        {/* META */}
        <ul className={styles.meta}>
          <li>
            <span>Name</span>
            <span>{name}</span>
          </li>
          <li>
            <span>Birthday</span>
            <span>{birthday}</span>
          </li>
          <li>
            <span>Sex</span>
            <span>{sex}</span>
          </li>
          <li>
            <span>Species</span>
            <span>{species}</span>
          </li>
          <li>
            <span>Category</span>
            <span>{category}</span>
          </li>
        </ul>

        {/* COMMENT */}
        <p className={styles.comment}>{comment}</p>

        {/* ACTION */}
        <button
          type="button"
          className={styles.learnMore}
          onClick={handleLearnMore}
        >
          Learn more
        </button>
      </div>
    </li>
  );
};