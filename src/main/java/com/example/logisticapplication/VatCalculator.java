package com.example.logisticapplication;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.webkit.WebView;

public class VatCalculator extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_vat_calculator);
        WebView webVIew = (WebView) findViewById(R.id.webwievCalculatorVat);
        webVIew.getSettings().setJavaScriptEnabled(true);
        webVIew.loadUrl("file:///android_asset/vat.html");
    }
}