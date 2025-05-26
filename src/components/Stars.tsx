import React, { useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

import star from '../assets/estrela.png';
import grayStar from '../assets/estrelaCinza.png';

type StarsProps = {
    quantity: number;
    editable?: boolean;
    large?: boolean;
};

export default function Stars({
    quantity: oldQuantity,
    editable = false,
    large = false,
}: StarsProps) {

    const [quantity, setQuantity] = useState(oldQuantity);
    const styles = stylesFunction(large);

    const getImage = (index: any) => {
        if (index < quantity) {
            return star;
        }
        return grayStar;
    };

    const RenderStars = () => {
        const starsList = [];
        for (let i = 0; i < 5; i++) {
            starsList.push(
                <TouchableOpacity
                    key={i}
                    onPress={() => setQuantity(i + 1)}
                    disabled={!editable}>
                    <Image source={getImage(i)} style={styles.star} />
                </TouchableOpacity>
            );
        }
        return starsList;
    };

    return <View style={styles.stars}>
        <RenderStars />
    </View>;
}

const stylesFunction = (large: boolean) => StyleSheet.create({
    stars: {
        flexDirection: 'row',
    },
    star: {
        width: large ? 36 : 12,
        height: large ? 36 : 12,
        marginRight: 2,
    },
});
