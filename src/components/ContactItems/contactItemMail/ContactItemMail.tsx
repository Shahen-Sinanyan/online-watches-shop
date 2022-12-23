//MUI
import { Button, Card, CardContent, Grid, TextField } from '@mui/material';
import { FormEvent, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import { useNotify } from '../../../hooks/useNotify';
import { notificationTypes } from '../../../types';

export default function ContactItemMail() {
   const { t } = useTranslation();
   const form = useRef<HTMLFormElement>(null);
   const notify = useNotify();

   const sendEmail = (e: FormEvent) => {
      e.preventDefault();

      emailjs
         .sendForm('service_8wbsau9', 'template_u7bkswc', form.current!, '_PvLxJTtwGT_cALlQ')
         .then(
            () => notify(notificationTypes.SUCCES, 'Your message was sent'),
            (error) => notify(notificationTypes.ERROR, error.text)
         );
   };

   return (
      <Card
         sx={{
            maxWidth: 500,
            margin: '20px auto',
            padding: '20px 5px',
            border: '3px solid #212834',
            background: 'rgba(33,40,52,0.1)'
         }}
      >
         <CardContent>
            <form ref={form} onSubmit={sendEmail} autoComplete='off'>
               <Grid container spacing={1}>
                  <Grid xs={12} sm={6} item sx={{ color: 'red' }}>
                     <TextField
                        name='name'
                        label={t('firstName')}
                        placeholder='Enter your name'
                        fullWidth
                        required
                     />
                  </Grid>
                  <Grid xs={12} sm={6} item>
                     <TextField
                        name='surname'
                        label={t('lastName')}
                        placeholder='Enter your last name'
                        fullWidth
                        required
                     />
                  </Grid>
                  <Grid xs={12} item>
                     <TextField
                        name='email'
                        type='email'
                        label={t('email')}
                        placeholder='Enter email'
                        fullWidth
                        required
                     />
                  </Grid>
                  <Grid xs={12} item>
                     <TextField
                        name='message'
                        label={t('message')}
                        multiline
                        rows={4}
                        placeholder='Type your message here'
                        fullWidth
                        required
                     />
                  </Grid>
                  <Grid xs={12} item>
                     <Button
                        sx={{
                           background: '#212834',
                           '&:hover': { background: 'rgba(33,40,52,0.9)' }
                        }}
                        type='submit'
                        variant='contained'
                        fullWidth
                     >
                        {t('submit')}
                     </Button>
                  </Grid>
               </Grid>
            </form>
         </CardContent>
      </Card>
   );
}
