import React from 'react';
import { connect } from 'react-redux';
import avatars from '../../../assets/images/avatars/avatars';
import { MAX_PLAYERS } from '../../../constants/variables';
import { addNewPlayer } from '../../../redux/actions/GameActions';

const Player = props => {
  const {
    player: { id, name, avatar, color },
    currentPlayerId,
  } = props;

  const playerStyle = {
    background: color,
    borderColor: color,
  };

  return (
    <div
      data-name={name}
      className={'player ' + (id === currentPlayerId ? 'active' : '')}
      style={playerStyle}
    >
      <img src={avatars[avatar - 1]} alt={name} />
    </div>
  );
};

const Players = props => {
  const {
    all,
    current: { id },
    count: playersCount,
  } = props.players;

  return (
    <>
      {all.map((p, index) => {
        return (
          <Player player={p} currentPlayerId={id} key={`player_${index}`} />
        );
      })}
      {playersCount < MAX_PLAYERS ? (
        <button
          data-name='افزودن بازیکن'
          className='addPlayer'
          onClick={() => {
            props.addNewPlayer();
          }}
        >
          <span role="img" aria-label="emoji">
            ➕
          </span>
        </button>
      ) : null}
    </>
  );
};

export default connect(
  null,
  {
    addNewPlayer,
  }
)(Players);
