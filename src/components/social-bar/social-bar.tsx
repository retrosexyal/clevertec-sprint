import React from 'react';
import {ReactComponent as Facebook} from '../../assets/svg/facebook_icon.svg';
import {ReactComponent as Insta} from '../../assets/svg/insta_icon.svg';
import {ReactComponent as Linked} from '../../assets/svg/linked_icon.svg';
import {ReactComponent as Vk} from '../../assets/svg/vk_icon.svg';

import styles from './social-bar.module.scss'


export const SocialBar = () => (
    <div className={styles.wrapper}>
        <Facebook/>
        <Insta />
        <Vk/>
        <Linked/>
    </div>
  )

