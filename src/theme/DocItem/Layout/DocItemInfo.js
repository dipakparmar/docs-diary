import React from 'react';
import ReadingTime from '../../../components/ReadingTime';
import ShareButton from '../ShareButton'
import { useDoc } from '@docusaurus/theme-common/internal';

function DocItemInfo() {
    const { metadata } = useDoc();
    return (
        <div className="flex justify-between">
            <ReadingTime />
            <ShareButton title={metadata.title}/>
        </div>)
}

export default DocItemInfo;