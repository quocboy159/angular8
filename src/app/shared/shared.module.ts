import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatTableModule, MatPaginatorModule, MatSortModule, MatIconModule, MatDatepickerModule, MatNativeDateModule, MatProgressSpinnerModule, MatToolbarModule, MatMenuModule, MatButtonModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        MatSliderModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatIconModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatProgressSpinnerModule,
        MatToolbarModule,
        MatMenuModule,
        MatButtonModule,
        ReactiveFormsModule
    ],
    exports: [
        MatSliderModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatIconModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatProgressSpinnerModule,
        MatToolbarModule,
        MatMenuModule,
        MatButtonModule,
        ReactiveFormsModule
    ]
})

export class SharedModule { }