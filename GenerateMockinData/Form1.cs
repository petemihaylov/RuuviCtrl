using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace GenerateMockinData
{
    public partial class Form1 : Form
    {
        MockRuuvi generateMockRuuvi = new MockRuuvi();
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            this.SetAssetList();
            //lblAssets.DataSource = generateMockRuuvi.assets;
        }

        private async void SetAssetList()
        {
            await generateMockRuuvi.GetAssetsAsync();
            lblAssets.DataSource = generateMockRuuvi.assets;
        }

        private void btnGenerateAssets_Click(object sender, EventArgs e)
        {
            generateMockRuuvi.GenerateAssets();
            this.SetAssetList();
        }

        private void checkBox1_CheckedChanged(object sender, EventArgs e)
        {
            TimerGenerateData.Enabled = checkBox1.Checked;
            generateMockRuuvi.GenerateRuuviData();
        }

        private void TimerGenerateData_Tick_1(object sender, EventArgs e)
        {
            generateMockRuuvi.GenerateRuuviData();
        }
    }
}
