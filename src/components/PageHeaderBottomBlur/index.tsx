import React from 'react';

import { LinearGradient } from 'expo-linear-gradient';

import styles from './styles';

const PageHeaderBottomBlur = () => {
    return (
        <LinearGradient colors={['#004354', '#00435400']} style={styles.container} />
    );
}

export default PageHeaderBottomBlur;