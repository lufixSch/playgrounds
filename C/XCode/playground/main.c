#include <stdio.h>
#define NUM_SAMPLES 640
#define MAX_KERNELSIZE 64

// char beispiel_daten[4] = { 1, -4, 0, 18 };

char input_data[NUM_SAMPLES] =  {
#include "sinus-6.txt"
};        // Inputdaten Ö sind zu filtern

char output_data[NUM_SAMPLES];        // Outputdaten Ö
                                                               //Öhier wird das Ergebnis abgelegt

int filter_kernel_size;                           // Filterbreite f¸r den Filtervorgang
char text[100];
int position_input_array=0;
int result;
char value;
int i =0;
int erg;
int eingabe;
int j=0;


int main()
{
    printf("Hier wird eine verzerrte Sinusdarstellung geglaettet\n");
    printf("Dies geschieht mittels einer Filterbreite, die je nach groesse die jeweiligen Werte nimmt und daraus einen Mittelwert bildet\n");
    printf("Sobald der Mittelwert ermittelt ist, wird dieser als neuer Wert fuer den Wert am Anfang der Filterbreite zugewiesen und in einen neuen Array gespeichert\n");
     printf("Die Filtergroesse darf zwischen 1 und 64 liegen\n");
    printf("Bitte geben Sie die gewuenschte Filtergroesse ein:    ");
    erg= scanf("%d" , &filter_kernel_size);
    printf("%d",filter_kernel_size);
    eingabe=filter_kernel_size;
    

    //erg = scanf("%s" , text);
    //eingabe = atoi (text);
    
    if (erg == 1)
    {
        if (0<erg&&erg<65)
        {
            for (position_input_array=0; position_input_array<(NUM_SAMPLES + 1 - eingabe); position_input_array++)
            {
                for ( i=position_input_array; i<(position_input_array+eingabe);i++)
                {
                    result=result+input_data[i];
                }
                value= (char)(result/eingabe);
                output_data[j]=value;
                result=0;
                
                j++;
                
            }
            fflush(stdin);
            // Schreiben in eine Datei
                // File schreiben vorbereiten

                FILE *input_file;                                          // deklarieren des file-pointers Ñinput_fileì

                input_file = fopen("Ausgabe.csv","w");  // ˆffnen der zu beschreibenden Datei
                
                for(j=0; j<NUM_SAMPLES;j++)
                {
                    fprintf(input_file ,"%d\n", output_data[j]);    // Schreiben in die Datei ñ zu verwenden wie Ñ printf ì
                }
                fclose(input_file);        // nachdem alle Daten geschrieben wurden - Datei schlieﬂen
        }
    }
    else
    {
        printf("Falsche Eingabe Programm wird beendet");
    }
}
    
    
        
    

    
        
    
    
    
    
    
    
    
    
    

