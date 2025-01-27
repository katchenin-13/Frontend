import React, { useState } from 'react';
import ConfigurableModal from './ConfigurableModal';
import CreationEntite from './CreationEntite';

const ModalButton = () => {

    return (
        <div>
            {/* Bouton pour ouvrir le modal */}
          <ConfigurableModal
                title="Creation d'un entite"
                // content={<CreationEntite />}
                acceptButtonText="Confirmer"
                declineButtonText="Annuler"
                onAccept={() => alert('Vous avez accepté !')}
                onDecline={() => alert('Vous avez refusé !')}
                modalWidth="max-w-4xl " // Largeur personnalisée
                modalHeight="max-h-full"   // Hauteur personnalisée
                modalStyles={{ backgroundColor: 'rgba(0,0,0,0.5)' }}

            />
        </div>
    );
};

export default ModalButton;
