namespace GenerateMockinData
{
    partial class Form1
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.components = new System.ComponentModel.Container();
            this.lblAssets = new System.Windows.Forms.ListBox();
            this.btnGenerateAssets = new System.Windows.Forms.Button();
            this.checkBox1 = new System.Windows.Forms.CheckBox();
            this.TimerGenerateData = new System.Windows.Forms.Timer(this.components);
            this.SuspendLayout();
            // 
            // lblAssets
            // 
            this.lblAssets.FormattingEnabled = true;
            this.lblAssets.Location = new System.Drawing.Point(12, 12);
            this.lblAssets.Name = "lblAssets";
            this.lblAssets.Size = new System.Drawing.Size(330, 355);
            this.lblAssets.TabIndex = 1;
            // 
            // btnGenerateAssets
            // 
            this.btnGenerateAssets.Location = new System.Drawing.Point(235, 373);
            this.btnGenerateAssets.Name = "btnGenerateAssets";
            this.btnGenerateAssets.Size = new System.Drawing.Size(107, 23);
            this.btnGenerateAssets.TabIndex = 2;
            this.btnGenerateAssets.Text = "Generate Assets";
            this.btnGenerateAssets.UseVisualStyleBackColor = true;
            this.btnGenerateAssets.Click += new System.EventHandler(this.btnGenerateAssets_Click);
            // 
            // checkBox1
            // 
            this.checkBox1.AutoSize = true;
            this.checkBox1.Checked = true;
            this.checkBox1.CheckState = System.Windows.Forms.CheckState.Checked;
            this.checkBox1.Location = new System.Drawing.Point(12, 377);
            this.checkBox1.Name = "checkBox1";
            this.checkBox1.Size = new System.Drawing.Size(137, 17);
            this.checkBox1.TabIndex = 3;
            this.checkBox1.Text = "Generate mocking data";
            this.checkBox1.UseVisualStyleBackColor = true;
            this.checkBox1.CheckedChanged += new System.EventHandler(this.checkBox1_CheckedChanged);
            // 
            // TimerGenerateData
            // 
            this.TimerGenerateData.Enabled = true;
            this.TimerGenerateData.Interval = 10000;
            this.TimerGenerateData.Tick += new System.EventHandler(this.TimerGenerateData_Tick_1);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(352, 450);
            this.Controls.Add(this.checkBox1);
            this.Controls.Add(this.btnGenerateAssets);
            this.Controls.Add(this.lblAssets);
            this.Name = "Form1";
            this.Text = "RuuviCTRL Mocker";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion
        private System.Windows.Forms.ListBox lblAssets;
        private System.Windows.Forms.Button btnGenerateAssets;
        private System.Windows.Forms.CheckBox checkBox1;
        private System.Windows.Forms.Timer TimerGenerateData;
    }
}

