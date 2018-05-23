import React from 'react';
import styles from './PostInfo.scss';
import classNames from 'classnames/bind';

import { Link } from 'react-router-dom';
import moment from 'moment';

const cx = classNames.bind(styles);

const PostInfo = ({ publishedDate, title, tags }) => (
  <div className={cx('post-info')}>
    <div className={cx('info')}>
      <h1>{title}</h1>
      <div className={cx('tags')}>
        {
          // tags 가 존재하는 경우에만 map 을 실행합니다.
          tags && tags.map(
            tag => {
              return tag ? <Link key={tag} to={`/tag/${tag}`}>#{tag}</Link> : ('')
            }
          )
        }
      </div>
      <div className={cx('date')}>{moment(publishedDate).format('ll')}</div>
    </div>
  </div>
);
export default PostInfo;