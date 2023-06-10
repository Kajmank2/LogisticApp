package com.example.logisticapplication;

import androidx.appcompat.app.AppCompatActivity;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class MainActivity extends AppCompatActivity {
    private Button buttoncalc, buttonaboutme, buttoncalculatorvat ;
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

        buttonaboutme = (Button) findViewById(R.id.buttonaboutme);
        buttonaboutme.setOnClickListener(new View.OnClickListener() {
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
    }


    public void openLogisticApp() {
            Intent intent  = new Intent(this, Calcualator.class);
            startActivity(intent);
        }
    public void openAboutme() {
        Intent intent = new Intent(this, AboutMe.class);
        startActivity(intent);
    }
    public void openVatCalculator() {
        Intent intent = new Intent(this, VatCalculator.class);
        startActivity(intent);
    }

}
