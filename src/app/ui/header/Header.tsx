import { ImgAll } from './Img';
import { Icons } from './Icons';
import { Nav } from './nav/Nav';
import commonStyles from '../../styles/common.module.css';
import headerStyles from '../../styles/header.module.css';
import { Wave } from './Wave';

export const Header = () => {
    return (
        <>
            <header className={headerStyles.headerWrapper}>
                <div className={`${commonStyles.container}`}>
                    <Nav />
                    <div className={headerStyles.headerBody}>
                        <div className={headerStyles.textHeader}>
                            <h1 className={headerStyles.h1Header}>НАСТОЯЩИЙ СПА-РИТУАЛ<br />
                                <span className={headerStyles.spanHeader}>ОБНОВЛЕНИЯ<br/> И СИЯНИЯ</span>
                            </h1>
                            <p className={headerStyles.pHeader}>Познакомьтесь с нашими натуральными солевыми скрабами, доступными в разнообразии ароматов, которые подарят вашей коже мягкость и гладкость, словно после спа-процедур!</p>
                            <Icons  />
                        </div>
                        <div className={headerStyles.imgWrapper}>
                            <ImgAll />
                            {/* <span className={headerStyles.bottomText}>
                                Солевые скрабы для тела не содержат агрессивных компонентов, поэтому подходят для беременных и, с осторожностью, для людей с чувствительной и проблемной кожей.
                            </span> */}
                        </div>
                    </div>
                </div>
            </header>
            <Wave />
        </>
    );
};