package com.example.logisticapplication;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class MainActivity extends AppCompatActivity {
    private Button buttoncalc,buttonpjl, buttonaKalkulatorSpalania, buttoncalculatorvat, buttonKalkulatorKosztowDojazdu ;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        buttoncalc = (Button) findViewById(R.id.buttonCalculator);
        buttoncalc.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                openLogisticApp();
            }
        });

        buttonaKalkulatorSpalania = (Button) findViewById(R.id.buttonaKalkulatorSpalania);
        buttonaKalkulatorSpalania.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                openAboutme();
            }
        });
        buttoncalculatorvat = (Button) findViewById(R.id.VatCalculatorButton);
        buttoncalculatorvat.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                openVatCalculator();
            }
        });
        buttonKalkulatorKosztowDojazdu = (Button) findViewById(R.id.buttonKalkulatorKosztowDojazdu);
        buttonKalkulatorKosztowDojazdu.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                openKalkulatorKosztowDojazdu();
            }
        });
        buttonpjl = (Button) findViewById(R.id.buttonpjl);
        buttonpjl.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                openPjl();
            }
        });
    }


    public void openLogisticApp() {
            Intent intent  = new Intent(this, Calcualator.class);
            startActivity(intent);
        }
    public void openAboutme() {
        Intent intent = new Intent(this, KalkulatorSpalania.class);
        startActivity(intent);
    }
    public void openVatCalculator() {
        Intent intent = new Intent(this, News.class);
        startActivity(intent);
    }

    public void openKalkulatorKosztowDojazdu() {
        Intent intent = new Intent(this, KalkulatorKosztowDojazdu.class);
        startActivity(intent);
    }
    public void openPjl() {
        Intent intent = new Intent(this, Pjl.class);
        startActivity(intent);
    }

}
