import React from 'react'
import { Typography, Stack, Button } from '@mui/material'

import BodyPartImage from '../assets/icons/body-part.png'
import TargetImage from '../assets/icons/target.png'
import EquipmentImage from '../assets/icons/equipment.png'



const Detail = ({ exerciseDetail }) => {

  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart
    },
    {
      icon: TargetImage,
      name: target
    },
    {
      icon: EquipmentImage,
      name: equipment
    }
  ]


  return (
    <Stack
      gap='60px'
      sx={{
        flexDirection: { lg:'row' },   //column by default and row on large devices
        p: '20px',
        alignItems:'center'
      }}
    >
      <img src={gifUrl} alt={name} loading='lazy' className="detail-image" />
      <Stack
        sx={{
          gap: { lg: '35px', xs: '20px' }
        }}
      >
        <Typography
          variant= 'h3'
          textTransform='capitalize'
        >
          {/* {name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()} */}
          {name}
        </Typography>
        <Typography 
          variant='h6'
        >
          Exercises keep you strong.  &nbsp;
          {/* <strong>{' ' + name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}</strong>   */}
          <strong style={{textTransform:'capitalize'}}>{name}</strong> &nbsp;
          is one of the best exercises to target your  &nbsp;
          {/* <strong>{' ' + target.charAt(0).toUpperCase() + target.slice(1).toLowerCase()}</strong> . */}
          <strong style={{textTransform:'capitalize'}}>{target}</strong>. &nbsp;
          It will also help you improve your mood and energy.
        </Typography>
        {extraDetail.map((item) => (
          <Stack
            key={item.name}
            direction='row'
            gap='24px'
            alignItems='center'
          >
            <Button
              sx={{
                background:'#fff2db',
                borderRadius:'50%',
                width:'100px',
                height:'100px'
              }}
            >
              <img src={item.icon} alt={bodyPart} style={{ width:'50px', height:'50px' }} />
            </Button>
            <Typography
              variant='h5'
              textTransform='capitalize'
            >
             {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}

export default Detail