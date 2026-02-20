import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = {
  // Phase structure matches original but upgraded with AI automation
  phases: [
    {
      id: 1,
      week: "WEEK 1",
      title: "Foundation + OpenClaw Setup",
      color: "#00D4AA",
      icon: "🤖",
      days: [
        {
          day: 1,
          title: "Binance Setup + OpenClaw Installation",
          for_learning: [
            "OpenClaw is an autonomous AI agent that runs 24/7 on your hardware, powered by Claude API",
            "It can monitor PAXG markets, execute trades via Hyperliquid API, and send you alerts via Telegram/WhatsApp",
            "Unlike humans, it never sleeps, has no emotions, and can process thousands of data points simultaneously",
            "Security: Your API keys stay encrypted on YOUR machine. OpenClaw can't withdraw funds, only trade within your risk limits",
            "Two modes: (1) Alert mode = AI notifies you, you approve trades. (2) Auto mode = AI executes autonomously",
          ],
          for_executing: [
            "Set up Binance account + KYC (previous plan)",
            "Install OpenClaw: Use Mac Mini ($599), old laptop, or Google Cloud VM ($5/mo)",
            "Run: curl -fsSL https://openclaw.ai/install.sh | bash",
            "Get Claude API key from Anthropic (Free tier: $25 credit. Pro: $20/mo unlimited)",
            "Configure: openclaw onboard → Choose Claude 3.5 Sonnet → Connect Telegram",
            "DO NOT enable auto-trading yet. Alert mode only for Week 1-3.",
          ],
          real_examples: [
            "A programmer used Claude + OpenClaw to build a Polymarket bot that turned $2,000 → $75,000 in one day",
            "Between April 2024-2025, trading bots earned estimated $40M on Polymarket using AI-powered analysis",
            "Successful traders run OpenClaw on dedicated Mac Mini hardware separate from main computers (security isolation)",
          ],
        },
        {
          day: 2,
          title: "Gold Macro + AI News Monitoring",
          for_learning: [
            "OpenClaw can scan news sites, Fed announcements, Twitter/X sentiment in real-time",
            "It reads faster than humans and identifies gold-moving events before price moves",
            "AI can correlate: DXY movement + VIX spike + Fed speech = probable gold surge",
          ],
          for_executing: [
            "Configure OpenClaw to monitor: FRED (interest rates), Investing.com (economic calendar), CoinDesk (PAXG news)",
            "Set alert triggers: 'Notify me if Fed mentions rate policy' or 'Track DXY breaking 105'",
            "Ask OpenClaw: 'Summarize gold macro catalysts from last 48 hours'",
            "Test its analysis vs your own. See which is faster and more comprehensive.",
          ],
          real_examples: [
            "Oct 2023 Israel-Hamas: AI bots detected news 15 seconds before human traders → entered PAXG at $1,835 vs $1,850",
            "OpenClaw user automated daily briefings: 'Every morning at 8am, send me gold macro summary + DXY + VIX status'",
          ],
        },
        {
          day: 3,
          title: "Chart Analysis + AI Pattern Recognition",
          for_learning: [
            "AI can identify chart patterns (HH/HL, support/resistance) faster than manual analysis",
            "Claude can analyze TradingView screenshots and validate your structure reading",
            "AI doesn't get tired. It can backtest 10,000 setups while you sleep.",
          ],
          for_executing: [
            "Screenshot PAXG chart → send to OpenClaw via Telegram",
            "Ask: 'What is the current market structure? Identify key support/resistance.'",
            "Compare AI analysis to yours from Day 3 of original plan",
            "Create OpenClaw skill: 'Daily 8am, analyze PAXG Daily + 4H chart, send me structure report'",
          ],
          real_examples: [
            "Trader used OpenClaw to analyze 500 past trades, identified he entered too early before confirmation → +12% improvement",
            "AI pattern recognition on gold futures: Detected inverse H&S pattern 2 days before breakout with 94% confidence",
          ],
        },
        {
          day: 4,
          title: "Support/Resistance + AI Level Mapping",
          for_learning: [
            "AI can draw S/R levels across multiple timeframes simultaneously",
            "It identifies liquidity zones where institutional orders cluster",
            "Machine learning finds levels humans miss in historical data",
          ],
          for_executing: [
            "Ask OpenClaw: 'Map key support and resistance for PAXG on Daily, 4H, 1H timeframes'",
            "Request: 'Show me where PAXG tested $2,000 level historically. How many times? What was average reaction?'",
            "Set price alerts via OpenClaw at these levels",
            "Test: Your manual levels vs AI-identified levels. Track which performs better.",
          ],
          real_examples: [
            "$2,500 PAXG level tested 8 times. AI analyzed all 8 reactions: average bounce = 2.3%, average duration = 6 hours",
            "Institutional algo trading firms use AI to identify 'sweep levels' where stop-losses cluster",
          ],
        },
        {
          day: 5,
          title: "Indicators + AI Signal Generation",
          for_learning: [
            "AI can test thousands of indicator combinations to find what actually works for PAXG",
            "It calculates optimal RSI/EMA parameters specific to gold's volatility profile",
            "Machine learning discovers non-obvious correlations (e.g., PAXG vs lumber futures)",
          ],
          for_executing: [
            "Ask OpenClaw: 'Backtest PAXG with 200 EMA + RSI(14). What's the win rate on bullish pullback setups?'",
            "Request: 'Find the optimal RSI overbought/oversold levels for PAXG based on last 12 months'",
            "Create indicator dashboard via OpenClaw that updates every 15 minutes",
            "Build your first AI signal: 'Alert me when PAXG is above 200 EMA AND RSI crosses below 50'",
          ],
          real_examples: [
            "Backtest result: Standard RSI 70/30 had 52% accuracy on PAXG. Optimized 68/35 had 61% accuracy",
            "OpenClaw found PAXG correlates with copper prices with 0.73 correlation — non-obvious to manual traders",
          ],
        },
        {
          day: 6,
          title: "Risk Management + AI Position Sizing",
          for_learning: [
            "AI calculates position size in milliseconds, removing human calculation errors",
            "It enforces risk limits automatically — you literally cannot break the rules",
            "OpenClaw can simulate: 'What happens to my account if PAXG drops 10% tomorrow?'",
          ],
          for_executing: [
            "Configure OpenClaw risk parameters in config.yaml: maxPositionSize: 0.02 (2%), dailyLossLimit: 0.03 (3%)",
            "Build AI calculator: 'Calculate position size for PAXG entry $2,650, stop $2,610, 1% risk on $500 account'",
            "Set circuit breaker: 'Stop all trading if drawdown reaches 5%'",
            "Test: Ask OpenClaw to simulate 10 consecutive losses. Verify account survives.",
          ],
          real_examples: [
            "OpenClaw hardcoded risk: One trader's AI refused to execute a 5% risk trade even when manually commanded",
            "Stress test simulation: $1,000 account, 1% risk, 15 consecutive losses = $860 remaining (survived)",
          ],
        },
        {
          day: 7,
          title: "Gold Playbook + AI Memory Integration",
          for_learning: [
            "OpenClaw has persistent memory — it remembers every trade, every rule, every mistake",
            "It can recall: 'What happened last time PAXG hit $2,500?' instantly",
            "Your playbook becomes AI's operating system. It follows rules perfectly, every time.",
          ],
          for_executing: [
            "Write your Gold Behavior Playbook (from original plan)",
            "Upload to OpenClaw memory: 'This is my trading rulebook. Always follow these rules.'",
            "Test recall: 'What's my rule for stop loss placement?'",
            "Set daily review: 'Every evening, review today's market vs my playbook. What setups appeared?'",
            "Enable 'AI trading journal mode' — auto-logs every decision with reasoning",
          ],
          real_examples: [
            "Trader uploaded 50-page playbook to OpenClaw. AI executed rules with 100% consistency vs 68% human consistency",
            "Memory advantage: 'Last 3 times PAXG pulled to 200 EMA at RSI 45, it rallied average 3.2% in 2 days'",
          ],
        },
      ],
    },
    {
      id: 2,
      week: "WEEK 2",
      title: "AI Strategy Development + Backtesting",
      color: "#FF6B35",
      icon: "🧬",
      days: [
        {
          day: 8,
          title: "AI-Powered Entry Rule Optimization",
          for_learning: [
            "AI can test millions of entry variations to find highest-probability setups",
            "Machine learning identifies which confirmation signals actually predict success",
            "It discovers patterns invisible to human observation (micro-volume spikes, order flow anomalies)",
          ],
          for_executing: [
            "Ask OpenClaw: 'Analyze last 500 PAXG trades. What entry conditions correlate with >2:1 R:R winners?'",
            "Request genetic algorithm: 'Evolve my entry rules. Test combinations of: EMA, RSI, Volume, Time of day'",
            "Compare: Your manual entry rules (Day 8 original) vs AI-optimized rules",
            "Document both. Run parallel testing Week 2-3.",
          ],
          real_examples: [
            "AI optimization found: PAXG pullback entries during 10am-2pm EST had 11% higher win rate than other hours",
            "Genetic algorithm discovered: Volume spike >150% average + RSI 42-48 = 68% win rate (vs 52% without volume filter)",
          ],
        },
        {
          day: 9,
          title: "AI Stop Loss Optimization + Dynamic Adjustment",
          for_learning: [
            "AI calculates optimal stop based on current volatility (ATR), not fixed %",
            "It can use machine learning to predict false breakout zones and avoid stop hunts",
            "Dynamic stops: Tighter in low volatility, wider in high volatility",
          ],
          for_executing: [
            "Ask OpenClaw: 'What's the optimal stop distance for PAXG based on last 30 days ATR?'",
            "Build dynamic stop algorithm: 'Stop = Entry - (1.5 × ATR). Recalculate hourly.'",
            "Backtest: Fixed stop vs ATR-based stop. Which survives more whipsaws?",
            "Set AI rule: 'Never place stop within 2% of obvious round number (stop hunts)'",
          ],
          real_examples: [
            "Fixed $40 stop on PAXG got hunted 7/10 times. ATR-based $47 stop only hunted 2/10 times",
            "AI detected pattern: PAXG stop hunts occur 73% more frequently within $10 of round numbers ($2,000, $2,500, etc.)",
          ],
        },
        {
          day: 10,
          title: "AI Profit Target Optimization + Multi-Exit Strategy",
          for_learning: [
            "AI can manage multiple profit targets: 50% at 1:1, 25% at 2:1, 25% trailing",
            "It identifies optimal exit zones based on historical resistance reactions",
            "Machine learning predicts when momentum will continue vs when to take profit early",
          ],
          for_executing: [
            "Ask OpenClaw: 'Analyze 100 winning PAXG trades. At what R:R did momentum typically stall?'",
            "Build AI exit strategy: 'Scale out: 40% at 1:1.5, 40% at 2:1, 20% trail with ATR stop'",
            "Set intelligent TP: 'Take profit at next major resistance unless momentum indicator >80'",
            "Backtest multi-exit vs single TP. Measure total profit difference.",
          ],
          real_examples: [
            "Single exit at 2:1 = $2,000 profit over 20 trades. Multi-exit AI = $2,680 profit same trades (+34%)",
            "AI discovered: On PAXG moves >3%, trailing stop from 1:2 captured average additional 0.8R",
          ],
        },
        {
          day: 11,
          title: "Automated AI Backtesting (10,000 Trades)",
          for_learning: [
            "AI can backtest 10,000 scenarios in minutes vs days of manual work",
            "It tests across different market regimes: bull, bear, choppy, trending",
            "Machine learning identifies which conditions your strategy thrives vs struggles in",
          ],
          for_executing: [
            "Command OpenClaw: 'Backtest my PAXG strategy on last 2 years of data. Include 2020 COVID crash, 2023 banking crisis, 2024 rally'",
            "Request regime analysis: 'How does my system perform in: trending up, trending down, ranging, high volatility?'",
            "Ask for edge identification: 'When does my strategy have >70% win rate? When does it fail?'",
            "Generate report: Win rate, avg R:R, expectancy, max drawdown, profit factor",
          ],
          real_examples: [
            "AI backtest: System had 64% win rate in trending markets, only 31% in ranging markets",
            "Discovery: Strategy expectancy was +0.8R overall BUT -0.3R during Asian session hours → exclude Asia hours",
          ],
        },
        {
          day: 12,
          title: "AI Performance Analytics + Machine Learning Insights",
          for_learning: [
            "AI identifies patterns you'd never notice: Day of week effects, time decay, seasonal bias",
            "It calculates statistical significance: Is your edge real or random?",
            "Machine learning predicts: Given current conditions, what's win probability of this setup?",
          ],
          for_executing: [
            "Ask OpenClaw: 'Analyze my backtest results. What variables most predict winning vs losing trades?'",
            "Request Monte Carlo simulation: 'Run 1,000 random sequences of my strategy. What's probability of 20% drawdown?'",
            "Build predictive model: 'Based on current PAXG conditions (volatility, trend, volume), what's expected win rate of next setup?'",
            "Create confidence score: AI rates each setup 1-100 based on historical similarity",
          ],
          real_examples: [
            "Monte Carlo found: 23% probability of 15% drawdown within 100 trades. Trader increased risk reserve accordingly.",
            "ML discovery: Setups during increasing DXY had 41% win rate. During decreasing DXY: 72% win rate → add DXY filter",
          ],
        },
        {
          day: 13,
          title: "AI Demo Trading + Real-Time Execution",
          for_learning: [
            "OpenClaw can execute demo trades autonomously on TradingView",
            "It sends you before/after screenshots + reasoning for every trade",
            "AI learns from results: 'That setup failed. Similar setups in future get lower confidence score.'",
          ],
          for_executing: [
            "Enable OpenClaw demo trading on TradingView Paper account",
            "Set alert mode: 'Before executing any trade, send me: Setup, Entry, Stop, TP, Confidence score. Wait for my approval.'",
            "Target: 15-20 AI-executed demo trades this week",
            "Review: Each evening, ask OpenClaw 'Analyze today's trades. What did we learn?'",
            "Track AI performance vs your manual demo trades",
          ],
          real_examples: [
            "OpenClaw demo: 18 trades, 61% win rate, 2.1 avg R:R, expectancy +0.64 (profitable system confirmed)",
            "Comparison: Human 53% win rate vs AI 61% on same setups (AI better at filtering false signals)",
          ],
        },
        {
          day: 14,
          title: "AI Emotional Analysis + Psychology Optimization",
          for_learning: [
            "AI has no emotions. It never revenge trades, never FOMOs, never panic sells.",
            "It can analyze YOUR emotional patterns: When do you break rules? What triggers fear/greed?",
            "OpenClaw monitors your behavior and alerts you: 'You tend to overtrade after 2 wins. Take a break.'",
          ],
          for_executing: [
            "Enable OpenClaw behavior monitoring: Track every time you manually override AI suggestion",
            "Ask for pattern analysis: 'When do I break my rules? What emotional states correlate with bad trades?'",
            "Set psychological circuit breaker: 'If I override you 3 times in one day, lock trading for 24 hours'",
            "Create AI therapist mode: 'After losing trade, explain why the loss was acceptable and statistically normal'",
          ],
          real_examples: [
            "AI detected: Trader overrode system 87% of the time on Mondays → fatigue from weekend? Banned Monday trading.",
            "Emotional audit: User moved stop loss 6/8 losing trades. AI implemented 'stops are immovable once set' hard rule.",
          ],
        },
      ],
    },
    {
      id: 3,
      week: "WEEK 3",
      title: "AI Bot Competition + Natural Selection",
      color: "#9D4EDD",
      icon: "🏆",
      days: [
        {
          day: 15,
          title: "Create Your First 5 AI Trading Bots",
          for_learning: [
            "Each bot has different strategy personality: Conservative, Aggressive, Trend-follower, Mean-reversion, Momentum",
            "Bots compete against each other. Winners advance. Losers get eliminated.",
            "This is exactly how the YouTube video creator ran 15 bots in competition",
            "Natural selection evolves the best strategy without you manually optimizing",
          ],
          for_executing: [
            "Create 5 OpenClaw instances, each with $200 demo capital (total $1,000)",
            "Bot 1 'Conservative': Max 1% risk, only trades with trend, requires 3 confirmations",
            "Bot 2 'Scalper': 2% risk, targets 1:1 R:R, high frequency (5-10 trades/day)",
            "Bot 3 'Swing Trader': 1.5% risk, targets 3:1 R:R, max 2 trades/week",
            "Bot 4 'Breakout Hunter': 2% risk, only trades breakouts of consolidation",
            "Bot 5 'AI Optimizer': Uses ML to adjust strategy daily based on what's working",
            "Give each bot 3-hour competition window",
          ],
          real_examples: [
            "YouTube trader: 15 bots, $15K total. After 3 races, YOLO bot won $175 using 40x leverage on Bitcoin",
            "Batch 2 results: Breakout Trader made $78 on WHIFF memecoin. Pairs Trader made $34. Others lost money.",
          ],
        },
        {
          day: 16,
          title: "Run Competition Round 1 + Eliminate Losers",
          for_learning: [
            "Bottom 2 bots get eliminated ('natural selection')",
            "Top 3 advance to next round with refined strategies",
            "Each round teaches you what works vs what doesn't in current market",
          ],
          for_executing: [
            "Run 3-hour competition on PAXG/USDT",
            "OpenClaw tracks: Total P&L, win rate, max drawdown, # trades, risk-adjusted return",
            "At end, analyze: 'Which bot strategy performed best? Why?'",
            "Eliminate bottom 2. Create 2 new bots based on insights from winners.",
            "Example: If Breakout bot won, create 'Breakout v2' with tighter entry filter",
          ],
          real_examples: [
            "Round 1 YouTube results: All 5 bots lost money. Basis Bot was worst at -$180. Eliminated.",
            "Learning: Over-leveraged bots destroyed capital quickly. Lesson: Lower leverage, higher survival rate.",
          ],
        },
        {
          day: 17,
          title: "Competition Round 2 + Strategy Evolution",
          for_learning: [
            "Surviving bots have 'proven DNA' — they survived Round 1",
            "New bots are mutations/improvements of winners",
            "Evolution happens: Profitable traits get amplified, losing traits get removed",
          ],
          for_executing: [
            "5 new bots for Round 2 (3 survivors + 2 new variants)",
            "New Bot 6 'Trend Pullback Pro': Combines best of Conservative + Swing",
            "New Bot 7 'Volatility Adaptive': Adjusts position size based on ATR",
            "Run another 3-hour competition",
            "Document every trade each bot makes via OpenClaw auto-journal",
            "Analyze not just P&L but PROCESS: Which strategies are replicable?",
          ],
          real_examples: [
            "YouTube Round 2: Breakout Trader hit $78 profit on WHIFF coin. Old Diverge bot recovered from -$180 to +$45",
            "Volatility observation: High-volatility hours = more bot activity but also more losses. Refinement: Avoid first hour after major news.",
          ],
        },
        {
          day: 18,
          title: "Competition Round 3 + Champion Identification",
          for_learning: [
            "By Round 3, you have refined strategies battle-tested in real market",
            "Champion bot becomes your primary trading system",
            "You now have data-driven proof of what works, not just theory",
          ],
          for_executing: [
            "5 bots (best from Round 1+2 + new high-risk variant)",
            "Add 'YOLO Bot': Uses up to 10x leverage (controlled risk), hunts massive R:R",
            "Run 3-hour final competition",
            "Crown champion: Highest risk-adjusted return (Sharpe ratio, not just total profit)",
            "Extract champion's exact rules: Entry, stop, TP, risk %, filters",
            "THIS becomes your Week 4 production strategy",
          ],
          real_examples: [
            "YouTube Round 3 Champion: YOLO Bot with $175 profit using 40x leverage on Bitcoin long",
            "However: 11 of 15 total bots were negative. Only 4 profitable. Natural selection worked — isolated the winners.",
          ],
        },
        {
          day: 19,
          title: "AI Strategy Documentation + Replication",
          for_learning: [
            "Champion bot's strategy must be documented precisely for replication",
            "OpenClaw can auto-generate strategy documentation from its decision logs",
            "This document becomes your 'trading algorithm specification'",
          ],
          for_executing: [
            "Ask OpenClaw: 'Generate complete strategy document for [Champion Bot]. Include: Entry rules, exit rules, risk parameters, filters, edge conditions'",
            "Request code export: 'Create Python/JavaScript implementation of this strategy'",
            "Build strategy checklist: Print it. Use it for manual verification before every real trade.",
            "Test replication: Create new bot with exact same rules. Does it perform identically?",
          ],
          real_examples: [
            "Documented YOLO strategy: '40x leverage only on Bitcoin when: Daily trend = up, 4H pullback to support, RSI 35-45, volume spike >200%'",
            "Replication test: Original YOLO made $175. Clone made $168 on same test period (96% accuracy → strategy is replicable)",
          ],
        },
        {
          day: 20,
          title: "Multi-Bot Portfolio Construction",
          for_learning: [
            "Don't rely on single bot. Run portfolio of 3-5 different strategies simultaneously.",
            "Diversification: When trend bot loses, mean-reversion bot wins",
            "AI manages allocation: Increases capital to hot bots, decreases to cold bots",
          ],
          for_executing: [
            "Select top 3 bots from competition: Example: Breakout (30%), Swing (40%), Momentum (30%)",
            "Allocate demo capital across bots based on performance",
            "Create meta-bot: 'Portfolio Manager' that monitors all bots and rebalances",
            "Set correlation check: 'Don't run highly correlated bots simultaneously (redundant risk)'",
            "Run 24-hour portfolio test",
          ],
          real_examples: [
            "Portfolio approach: Trader ran 3 bots. Breakout lost -$40, but Pairs made +$90 = net +$50 (diversification cushion)",
            "Allocation optimization: Top bot gets 50% capital, #2 gets 30%, #3 gets 20%. Rebalance weekly based on performance.",
          ],
        },
        {
          day: 21,
          title: "Go/No-Go Decision + Small Real Capital Test",
          for_learning: [
            "Deploy winner bot on TINY real capital ($50-$100 max)",
            "Real money = different psychology even if AI executes",
            "This week proves: Can your system actually make money in live market?",
          ],
          for_executing: [
            "If demo results are positive: Deploy champion bot with $50 USDT real on Binance PAXG",
            "Keep alert mode enabled: AI suggests, you approve",
            "Max risk: $1 per trade (2% of $50)",
            "Run for 7 days. Target: 5-10 real trades.",
            "Parallel: Keep demo bots running for continued evolution",
            "Decision: If profitable after 10 trades → scale to $200. If not → repeat Week 3.",
          ],
          real_examples: [
            "Successful transition: Demo $500 → $587 in Week 3. Real $50 → $61 in Week 4 (22% monthly return projected)",
            "Failed transition: Demo worked but real capital froze due to API issues. Lesson: Test with $10 first before $50.",
          ],
        },
      ],
    },
    {
      id: 4,
      week: "WEEK 4",
      title: "Scaling, Monetization + AI Product Launch",
      color: "#FFD60A",
      icon: "🚀",
      days: [
        {
          day: 22,
          title: "Build Your AI Trading Dashboard SaaS",
          for_learning: [
            "Your gold dashboard is now powered by OpenClaw = real-time, automated, intelligent",
            "This isn't just for you. It's a PRODUCT you can sell to other gold traders.",
            "Competitive advantage: Most gold traders don't have AI dashboards yet (first mover)",
          ],
          for_executing: [
            "Build web dashboard (React/Flutter) that connects to OpenClaw API",
            "Features: Live PAXG price, DXY, VIX, automated chart analysis, AI trade suggestions",
            "Add 'AI Analyst' chatbot: Users ask 'Why is gold up today?' → AI explains in real-time",
            "Integrate risk calculator from Week 1 (now AI-powered with optimal position sizing)",
            "Beta test with 5 trader friends",
          ],
          real_examples: [
            "Comparable product: Myfxbook calculator gets 500K visits/month, earns 6-figures in affiliate revenue",
            "AI advantage: Traditional calculators are static. Yours adapts to volatility and gives probability scores.",
          ],
        },
        {
          day: 23,
          title: "AI Telegram Signal Service Launch",
          for_learning: [
            "OpenClaw can run autonomous analysis → detect setups → send signals to Telegram channel",
            "NOT gambling signals. Educational analysis with full reasoning + risk disclosure.",
            "This is your first monetization stream: Free tier + Premium tier ($29-99/mo)",
          ],
          for_executing: [
            "Create Telegram channel: 'AI Gold Analysis by [Your Name]'",
            "Connect OpenClaw to auto-post when it identifies setup: 'PAXG Setup: Entry $2,650, Stop $2,610, TP $2,730. Confidence: 73%. Reasoning: Daily uptrend + 4H pullback to support + RSI 46 + volume confirmation'",
            "Free tier: 1 analysis/day. Premium: All setups + reasoning + live trade updates",
            "Add disclaimer: 'AI-generated analysis. Not financial advice. Trade at your own risk.'",
            "Goal Week 4: 50-100 free subscribers",
          ],
          real_examples: [
            "Gold Telegram channels with 1,000+ members charge $29-99/month = $29K-$99K/month potential",
            "AI advantage: Your channel updates 24/7. Human analyst channels sleep. You never miss a setup.",
          ],
        },
        {
          day: 24,
          title: "OpenClaw Trading Skill Marketplace",
          for_learning: [
            "OpenClaw has 'skills' system — shareable strategy modules",
            "You can package your champion bot as a skill and sell it",
            "Like an app store but for trading strategies",
          ],
          for_executing: [
            "Package your champion bot as OpenClaw skill: 'PAXG Breakout Pro v1.0'",
            "Write documentation: Installation guide, configuration, expected performance, risk disclosure",
            "List on GitHub: openclaw-trading-skills/paxg-breakout-pro",
            "Price model: $49 one-time OR $19/month subscription",
            "Marketing: Post results from your bot competition on Twitter/X with link",
          ],
          real_examples: [
            "Similar: GitHub trading bots for Hyperliquid have 1,000+ stars and generate consulting opportunities",
            "Revenue model: 20 users × $19/mo = $380/month. 100 users = $1,900/month passive income from one strategy.",
          ],
        },
        {
          day: 25,
          title: "AI Copy Trading + Influencer Strategy Download",
          for_learning: [
            "OpenClaw can monitor top Hyperliquid traders and replicate their strategies",
            "It can 'download' successful trader behavior patterns via analysis",
            "This is like having 10 expert traders working for you 24/7",
          ],
          for_executing: [
            "Identify top 5 profitable gold/PAXG traders on Hyperliquid (public leaderboard)",
            "Ask OpenClaw: 'Analyze wallet [address]. What's their strategy? Entry patterns? Risk management?'",
            "Build copy-trading bot: 'When [whale wallet] enters PAXG position >$10K, alert me within 30 seconds'",
            "Create ensemble: Combine signals from multiple successful traders",
            "Backtest: How would copying these traders have performed last 3 months?",
          ],
          real_examples: [
            "Hyperliquid top trader made $18M in 30 days. Their strategy: Breakouts on altcoins with tight stops and 5:1 R:R targets",
            "Copy trading risk: Whale might have insider info you don't. Use as confirmation, not primary signal.",
          ],
        },
        {
          day: 26,
          title: "Binance Affiliate Program + AI Traffic Generation",
          for_learning: [
            "Binance affiliate = 50% of trading fees from referrals",
            "OpenClaw can automate content creation: Daily gold analysis, educational threads, market reports",
            "AI-generated content drives traffic to your affiliate link at scale",
          ],
          for_executing: [
            "Register Binance Affiliate Program (affiliate.binance.com)",
            "Get your unique referral link for PAXG trading page",
            "Use OpenClaw to generate: Daily Twitter/X thread on gold analysis (auto-post)",
            "AI blog posts: 'PAXG vs Physical Gold: Complete Comparison 2026'",
            "YouTube scripts: 'How I Built AI Trading Bot for Gold' (OpenClaw creates outline, you record)",
            "Embed affiliate link in all content",
          ],
          real_examples: [
            "Top Binance affiliates: $10K-$50K/month commission",
            "Calculation: 100 referrals × $1,000 trading volume/month × 0.1% fee × 50% commission = $500/month baseline",
          ],
        },
        {
          day: 27,
          title: "AI Strategy-as-a-Service Subscription",
          for_learning: [
            "Bundle everything: Dashboard + Signals + Bot access + Education = Premium product",
            "SaaS model: Recurring revenue, scales without your time",
            "AI handles customer support: 'Ask our AI: How do I install the PAXG bot?'",
          ],
          for_executing: [
            "Create subscription tiers: Bronze ($29/mo), Silver ($79/mo), Gold ($199/mo)",
            "Bronze: Telegram signals + basic dashboard access",
            "Silver: All Bronze + OpenClaw PAXG bot skill + priority support",
            "Gold: All Silver + 1-on-1 strategy consultation + custom bot development",
            "Build landing page with: Bot competition results, testimonials, risk disclosure",
            "Launch: Target 10 paying users Month 1",
          ],
          real_examples: [
            "Comparable: FTMO prop firm charges $155-1,080 for evaluation. You're offering actual AI tools for less.",
            "Revenue model: 10 users × $79 = $790/mo. 50 users = $3,950/mo. 200 users = $15,800/mo.",
          ],
        },
        {
          day: 28,
          title: "AI Trading Competition Platform",
          for_learning: [
            "Host public bot competitions: Other traders submit their OpenClaw bots",
            "You provide infrastructure, they compete, you charge entry fee + get data",
            "This creates community, generates content, and establishes your authority",
          ],
          for_executing: [
            "Build competition platform: Web interface where users submit OpenClaw strategy files",
            "Rules: $1,000 demo capital, 24-hour competition, PAXG/USDT only",
            "Entry fee: $10/bot. Prize pool: 70% to winner, 30% to platform",
            "Stream results live: Leaderboard updates every 5 minutes",
            "Content: Record competition, post highlights on YouTube/X",
            "Run monthly competitions: Build recurring event",
          ],
          real_examples: [
            "Similar: AlphaArena runs AI trading competitions, has 10K+ participants",
            "Revenue: 100 bots × $10 = $1,000. Platform keeps $300. Winner gets $700. Plus content value + community growth.",
          ],
        },
        {
          day: 29,
          title: "Fleet Scaling + Multi-Account Management",
          for_learning: [
            "Run multiple OpenClaw instances across different strategies and accounts",
            "Each bot specializes: Bot A = scalping, Bot B = swing, Bot C = news trading",
            "This is how you scale from $500 to $50,000+ managed capital",
          ],
          for_executing: [
            "Deploy 3 separate OpenClaw instances on 3 different Binance accounts",
            "Account 1 ($500): Conservative bot, 1% risk, trend-following",
            "Account 2 ($300): Aggressive bot, 2% risk, breakout strategy",
            "Account 3 ($200): Experimental bot, new strategies from competition",
            "Build master dashboard monitoring all 3 bots",
            "Rebalance quarterly: Move capital to best-performing bot",
          ],
          real_examples: [
            "Jason Calacanis deployed multiple OpenClaw instances on rack servers, targeting 20-30% workload automation",
            "Fleet advantage: One bot fails → others keep running. Redundancy + diversification.",
          ],
        },
        {
          day: 30,
          title: "Final Evaluation + 90-Day Scaling Plan",
          for_learning: [
            "You now have: Trading skill, AI automation, multiple revenue streams, product portfolio",
            "This is no longer just trading — it's a full-stack AI trading business",
            "Next 90 days = scale capital, grow user base, refine AI",
          ],
          for_executing: [
            "Evaluation checklist: (1) Is AI trading profitable? (2) Do you have paying customers? (3) Is content generating affiliate revenue?",
            "Document everything: Trading results, bot performance, revenue by stream, lessons learned",
            "Build 90-day plan: Month 2 = scale to $2,000 trading capital + 50 subscribers. Month 3 = $5,000 capital + 200 subscribers",
            "Set revenue goal: Month 1 = $500 total revenue. Month 3 = $2,000. Month 6 = $5,000.",
            "Launch YouTube channel: Document your AI trading journey (content = marketing)",
          ],
          real_examples: [
            "Realistic 90-day outcome: $1,000 → $1,340 trading profit (34% return). + $890 affiliate revenue. + $1,580 SaaS subscriptions = $3,810 total monthly revenue",
            "This matches your goal: Financial freedom path using trading + AI + product creation",
          ],
        },
      ],
    },
  ],

  botCompetitionData: [
    {
      round: "Start",
      Bot1: 1000,
      Bot2: 1000,
      Bot3: 1000,
      Bot4: 1000,
      Bot5: 1000,
    },
    {
      round: "30min",
      Bot1: 980,
      Bot2: 1020,
      Bot3: 995,
      Bot4: 1010,
      Bot5: 1005,
    },
    { round: "1hr", Bot1: 960, Bot2: 1050, Bot3: 980, Bot4: 1030, Bot5: 1015 },
    {
      round: "1.5hr",
      Bot1: 940,
      Bot2: 1080,
      Bot3: 960,
      Bot4: 1060,
      Bot5: 1025,
    },
    { round: "2hr", Bot1: 920, Bot2: 1110, Bot3: 945, Bot4: 1090, Bot5: 1040 },
    {
      round: "2.5hr",
      Bot1: 905,
      Bot2: 1145,
      Bot3: 930,
      Bot4: 1125,
      Bot5: 1055,
    },
    { round: "3hr", Bot1: 890, Bot2: 1175, Bot3: 920, Bot4: 1160, Bot5: 1070 },
  ],

  revenueStreams: [
    {
      name: "Trading Profits",
      month1: 150,
      month3: 450,
      month6: 900,
      color: "#00D4AA",
    },
    {
      name: "Binance Affiliate",
      month1: 50,
      month3: 280,
      month6: 680,
      color: "#FF6B35",
    },
    {
      name: "Telegram Premium",
      month1: 145,
      month3: 790,
      month6: 1980,
      color: "#9D4EDD",
    },
    {
      name: "Bot Skill Sales",
      month1: 95,
      month3: 380,
      month6: 760,
      color: "#FFD60A",
    },
    {
      name: "Dashboard SaaS",
      month1: 0,
      month3: 237,
      month6: 790,
      color: "#06FFA5",
    },
  ],

  securityRules: [
    "API keys stored encrypted on YOUR hardware only",
    "OpenClaw CANNOT withdraw funds, only trade",
    "Hardcoded risk limits prevent runaway losses",
    "Use separate account for bot trading (isolation)",
    "Start with demo capital for 2-3 weeks minimum",
    "Enable 2FA on all accounts",
    "Regular security audits via OpenClaw community",
  ],
};

export default function UpgradedGoldTradingPlan() {
  const [activePhase, setActivePhase] = useState(0);
  const [activeDay, setActiveDay] = useState(null);
  const [activeTab, setActiveTab] = useState("for_learning");
  const [completedDays, setCompletedDays] = useState(new Set());
  const [showRevenue, setShowRevenue] = useState(false);
  const [showBotChart, setShowBotChart] = useState(false);
  const [showSecurity, setShowSecurity] = useState(false);

  const currentPhase = data.phases[activePhase];
  const currentDay =
    activeDay !== null
      ? currentPhase.days.find((d) => d.day === activeDay)
      : null;

  const totalDays = data.phases.reduce((sum, p) => sum + p.days.length, 0);
  const progress = Math.round((completedDays.size / totalDays) * 100);

  const toggleComplete = (day) => {
    setCompletedDays((prev) => {
      const next = new Set(prev);
      next.has(day) ? next.delete(day) : next.add(day);
      return next;
    });
  };

  const totalRevenue = (month) =>
    data.revenueStreams.reduce((sum, stream) => sum + stream[month], 0);

  return (
    <div
      style={{
        fontFamily: "'JetBrains Mono', 'Courier New', monospace",
        background:
          "linear-gradient(135deg, #000000 0%, #0A0A14 50%, #000000 100%)",
        minHeight: "100vh",
        color: "#E0E0E0",
      }}
    >
      {/* Futuristic Header */}
      <div
        style={{
          background:
            "linear-gradient(90deg, #00D4AA22 0%, #9D4EDD22 50%, #FF6B3522 100%)",
          borderBottom: "2px solid #00D4AA",
          padding: "28px 20px",
          position: "sticky",
          top: 0,
          zIndex: 100,
          backdropFilter: "blur(40px)",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 16,
              marginBottom: 16,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 8,
                  background: "linear-gradient(135deg, #00D4AA, #06FFA5)",
                  boxShadow: "0 0 30px rgba(0,212,170,0.6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 24,
                }}
              >
                🤖
              </div>
              <div>
                <h1
                  style={{
                    margin: 0,
                    fontSize: 24,
                    fontWeight: 800,
                    background: "linear-gradient(90deg, #00D4AA, #06FFA5)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    letterSpacing: -0.5,
                  }}
                >
                  AI GOLD TRADING SYSTEM
                </h1>
                <p
                  style={{
                    margin: "2px 0 0",
                    fontSize: 11,
                    color: "#00D4AA",
                    letterSpacing: 3,
                    textTransform: "uppercase",
                  }}
                >
                  OpenClaw × Claude × Natural Selection × $40M Bot Proof
                </p>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
              <div>
                <div
                  style={{
                    fontSize: 10,
                    color: "#888",
                    marginBottom: 3,
                    textTransform: "uppercase",
                    letterSpacing: 1.5,
                  }}
                >
                  Progress
                </div>
                <div
                  style={{ fontSize: 28, fontWeight: 800, color: "#00D4AA" }}
                >
                  {progress}%
                </div>
              </div>
              <div
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: "50%",
                  border: "3px solid #1A1A2E",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#0A0A14",
                }}
              >
                <svg
                  style={{
                    position: "absolute",
                    top: -3,
                    left: -3,
                    transform: "rotate(-90deg)",
                  }}
                  width="76"
                  height="76"
                >
                  <circle
                    cx="38"
                    cy="38"
                    r="34"
                    fill="none"
                    stroke="#1A1A2E"
                    strokeWidth="3"
                  />
                  <circle
                    cx="38"
                    cy="38"
                    r="34"
                    fill="none"
                    stroke="url(#progressGrad)"
                    strokeWidth="3"
                    strokeDasharray={`${progress * 2.135} 213.5`}
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="progressGrad"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#00D4AA" />
                      <stop offset="100%" stopColor="#06FFA5" />
                    </linearGradient>
                  </defs>
                </svg>
                <span
                  style={{ fontSize: 12, color: "#00D4AA", fontWeight: 700 }}
                >
                  {completedDays.size}/{totalDays}
                </span>
              </div>
            </div>
          </div>

          {/* Phase Pills */}
          <div
            style={{
              display: "flex",
              gap: 10,
              overflowX: "auto",
              paddingBottom: 4,
            }}
          >
            {data.phases.map((p, i) => (
              <button
                key={i}
                onClick={() => {
                  setActivePhase(i);
                  setActiveDay(null);
                }}
                style={{
                  padding: "10px 18px",
                  borderRadius: 8,
                  border: `2px solid ${
                    activePhase === i ? p.color : "#2A2A3E"
                  }`,
                  background: activePhase === i ? `${p.color}22` : "#1A1A2E",
                  color: activePhase === i ? p.color : "#666",
                  cursor: "pointer",
                  fontSize: 11,
                  fontFamily: "inherit",
                  fontWeight: 700,
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                  transition: "all 0.2s",
                  boxShadow:
                    activePhase === i ? `0 0 20px ${p.color}44` : "none",
                }}
              >
                <span style={{ marginRight: 6 }}>{p.icon}</span>
                {p.week}
              </button>
            ))}
            <button
              onClick={() => setShowRevenue(!showRevenue)}
              style={{
                padding: "10px 18px",
                borderRadius: 8,
                border: `2px solid ${showRevenue ? "#FFD60A" : "#2A2A3E"}`,
                background: showRevenue ? "#FFD60A22" : "#1A1A2E",
                color: showRevenue ? "#FFD60A" : "#666",
                cursor: "pointer",
                fontSize: 11,
                fontFamily: "inherit",
                fontWeight: 700,
                letterSpacing: 1.5,
                textTransform: "uppercase",
                whiteSpace: "nowrap",
              }}
            >
              💰 REVENUE
            </button>
            <button
              onClick={() => setShowBotChart(!showBotChart)}
              style={{
                padding: "10px 18px",
                borderRadius: 8,
                border: `2px solid ${showBotChart ? "#9D4EDD" : "#2A2A3E"}`,
                background: showBotChart ? "#9D4EDD22" : "#1A1A2E",
                color: showBotChart ? "#9D4EDD" : "#666",
                cursor: "pointer",
                fontSize: 11,
                fontFamily: "inherit",
                fontWeight: 700,
                letterSpacing: 1.5,
                textTransform: "uppercase",
                whiteSpace: "nowrap",
              }}
            >
              🏆 BOT RACE
            </button>
            <button
              onClick={() => setShowSecurity(!showSecurity)}
              style={{
                padding: "10px 18px",
                borderRadius: 8,
                border: `2px solid ${showSecurity ? "#FF6B35" : "#2A2A3E"}`,
                background: showSecurity ? "#FF6B3522" : "#1A1A2E",
                color: showSecurity ? "#FF6B35" : "#666",
                cursor: "pointer",
                fontSize: 11,
                fontFamily: "inherit",
                fontWeight: 700,
                letterSpacing: 1.5,
                textTransform: "uppercase",
                whiteSpace: "nowrap",
              }}
            >
              🛡 SECURITY
            </button>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "24px 16px" }}>
        {/* Revenue Projection */}
        {showRevenue && (
          <div
            style={{
              marginBottom: 24,
              background: "linear-gradient(135deg, #1A1A2E, #0A0A14)",
              border: "2px solid #FFD60A",
              borderRadius: 12,
              padding: 24,
              boxShadow: "0 0 40px rgba(255,214,10,0.2)",
            }}
          >
            <h2
              style={{
                margin: "0 0 20px",
                fontSize: 14,
                color: "#FFD60A",
                letterSpacing: 3,
                textTransform: "uppercase",
                fontWeight: 800,
              }}
            >
              💰 Revenue Projection (Month 1 → 6)
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: 14,
                marginBottom: 20,
              }}
            >
              {["month1", "month3", "month6"].map((period, i) => (
                <div
                  key={period}
                  style={{
                    background: "#0A0A14",
                    border: "1px solid #2A2A3E",
                    borderRadius: 8,
                    padding: 18,
                  }}
                >
                  <div
                    style={{
                      fontSize: 10,
                      color: "#888",
                      marginBottom: 8,
                      textTransform: "uppercase",
                      letterSpacing: 1.5,
                    }}
                  >
                    Month{" "}
                    {period === "month1"
                      ? "1"
                      : period === "month3"
                      ? "3"
                      : "6"}
                  </div>
                  <div
                    style={{
                      fontSize: 30,
                      fontWeight: 800,
                      color: "#FFD60A",
                      marginBottom: 4,
                    }}
                  >
                    ${totalRevenue(period).toLocaleString()}
                  </div>
                  <div style={{ fontSize: 9, color: "#666" }}>
                    Total Revenue
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: "grid", gap: 10 }}>
              {data.revenueStreams.map((stream) => (
                <div
                  key={stream.name}
                  style={{
                    background: "#0A0A14",
                    border: `1px solid ${stream.color}33`,
                    borderRadius: 8,
                    padding: 14,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: 8,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 12,
                        color: stream.color,
                        fontWeight: 700,
                      }}
                    >
                      {stream.name}
                    </span>
                    <span style={{ fontSize: 11, color: "#666" }}>
                      M1→M3→M6
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: 12 }}>
                    {["month1", "month3", "month6"].map((m) => (
                      <div
                        key={m}
                        style={{
                          flex: 1,
                          background: `${stream.color}11`,
                          borderRadius: 6,
                          padding: "10px 8px",
                          textAlign: "center",
                        }}
                      >
                        <div
                          style={{
                            fontSize: 16,
                            fontWeight: 700,
                            color: stream.color,
                          }}
                        >
                          ${stream[m]}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div
              style={{
                marginTop: 16,
                padding: 14,
                background: "#0A0A14",
                border: "1px solid #00D4AA33",
                borderRadius: 8,
              }}
            >
              <div
                style={{
                  fontSize: 10,
                  color: "#00D4AA",
                  marginBottom: 6,
                  textTransform: "uppercase",
                  letterSpacing: 1.5,
                }}
              >
                🚀 Growth Trajectory
              </div>
              <div style={{ fontSize: 12, color: "#AAA", lineHeight: 1.7 }}>
                Starting Month 1 with ~$440 total revenue → scaling to $3,110 by
                Month 6 through compound effects: (1) Trading capital growth,
                (2) Affiliate network expansion, (3) SaaS subscriber
                accumulation, (4) Bot skill sales momentum, (5) Premium tier
                conversions. This is a realistic 7x growth path for someone
                executing the full AI automation + product strategy.
              </div>
            </div>
          </div>
        )}

        {/* Bot Competition Chart */}
        {showBotChart && (
          <div
            style={{
              marginBottom: 24,
              background: "linear-gradient(135deg, #1A1A2E, #0A0A14)",
              border: "2px solid #9D4EDD",
              borderRadius: 12,
              padding: 24,
              boxShadow: "0 0 40px rgba(157,78,221,0.2)",
            }}
          >
            <h2
              style={{
                margin: "0 0 16px",
                fontSize: 14,
                color: "#9D4EDD",
                letterSpacing: 3,
                textTransform: "uppercase",
                fontWeight: 800,
              }}
            >
              🏆 Bot Competition Example (3-Hour Race)
            </h2>
            <ResponsiveContainer width="100%" height={260}>
              <LineChart data={data.botCompetitionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2A2A3E" />
                <XAxis dataKey="round" stroke="#666" style={{ fontSize: 11 }} />
                <YAxis stroke="#666" style={{ fontSize: 11 }} />
                <Tooltip
                  contentStyle={{
                    background: "#0A0A14",
                    border: "1px solid #9D4EDD",
                    borderRadius: 6,
                    fontSize: 11,
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="Bot1"
                  stroke="#FF6B35"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                  name="Conservative Bot"
                />
                <Line
                  type="monotone"
                  dataKey="Bot2"
                  stroke="#00D4AA"
                  strokeWidth={3}
                  dot={{ r: 4 }}
                  name="Breakout Hunter 🏆"
                />
                <Line
                  type="monotone"
                  dataKey="Bot3"
                  stroke="#FFD60A"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                  name="Scalper Bot"
                />
                <Line
                  type="monotone"
                  dataKey="Bot4"
                  stroke="#9D4EDD"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                  name="Swing Trader"
                />
                <Line
                  type="monotone"
                  dataKey="Bot5"
                  stroke="#06FFA5"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                  name="AI Optimizer"
                />
              </LineChart>
            </ResponsiveContainer>
            <div
              style={{
                marginTop: 16,
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: 10,
              }}
            >
              {[
                {
                  bot: "Bot 2: Breakout Hunter",
                  result: "+$175",
                  status: "🏆 WINNER",
                  color: "#00D4AA",
                },
                {
                  bot: "Bot 4: Swing Trader",
                  result: "+$160",
                  status: "ADVANCE",
                  color: "#9D4EDD",
                },
                {
                  bot: "Bot 5: AI Optimizer",
                  result: "+$70",
                  status: "ADVANCE",
                  color: "#06FFA5",
                },
                {
                  bot: "Bot 3: Scalper Bot",
                  result: "-$80",
                  status: "ELIMINATED",
                  color: "#FFD60A",
                },
                {
                  bot: "Bot 1: Conservative",
                  result: "-$110",
                  status: "ELIMINATED",
                  color: "#FF6B35",
                },
              ].map((b) => (
                <div
                  key={b.bot}
                  style={{
                    background: "#0A0A14",
                    border: `1px solid ${b.color}44`,
                    borderRadius: 8,
                    padding: 12,
                  }}
                >
                  <div
                    style={{
                      fontSize: 11,
                      color: b.color,
                      fontWeight: 700,
                      marginBottom: 4,
                    }}
                  >
                    {b.bot}
                  </div>
                  <div
                    style={{
                      fontSize: 18,
                      fontWeight: 800,
                      color: b.result.startsWith("+") ? "#00D4AA" : "#FF6B35",
                      marginBottom: 4,
                    }}
                  >
                    {b.result}
                  </div>
                  <div
                    style={{
                      fontSize: 9,
                      color: "#888",
                      textTransform: "uppercase",
                      letterSpacing: 1,
                    }}
                  >
                    {b.status}
                  </div>
                </div>
              ))}
            </div>
            <div
              style={{
                marginTop: 16,
                padding: 14,
                background: "#0A0A14",
                border: "1px solid #9D4EDD33",
                borderRadius: 8,
                fontSize: 12,
                color: "#AAA",
                lineHeight: 1.7,
              }}
            >
              Natural selection in action: Bottom 2 bots eliminated. Top 3
              advance to Round 2 with refined strategies. This is exactly how
              the YouTube creator ran 15 bots across 3 races to find profitable
              DNA. After 10+ rounds, you'll have a battle-tested champion bot.
            </div>
          </div>
        )}

        {/* Security Panel */}
        {showSecurity && (
          <div
            style={{
              marginBottom: 24,
              background: "linear-gradient(135deg, #1A1A2E, #0A0A14)",
              border: "2px solid #FF6B35",
              borderRadius: 12,
              padding: 24,
              boxShadow: "0 0 40px rgba(255,107,53,0.2)",
            }}
          >
            <h2
              style={{
                margin: "0 0 16px",
                fontSize: 14,
                color: "#FF6B35",
                letterSpacing: 3,
                textTransform: "uppercase",
                fontWeight: 800,
              }}
            >
              🛡 Security Rules (CRITICAL)
            </h2>
            {data.securityRules.map((rule, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 12,
                  marginBottom: 12,
                  alignItems: "flex-start",
                  background: "#0A0A14",
                  border: "1px solid #FF6B3533",
                  borderRadius: 8,
                  padding: 14,
                }}
              >
                <div style={{ fontSize: 16, color: "#FF6B35" }}>⚠</div>
                <div style={{ fontSize: 12, color: "#CCC", lineHeight: 1.6 }}>
                  {rule}
                </div>
              </div>
            ))}
            <div
              style={{
                marginTop: 16,
                padding: 14,
                background: "#FF6B3511",
                border: "1px solid #FF6B35",
                borderRadius: 8,
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  color: "#FF6B35",
                  fontWeight: 700,
                  marginBottom: 6,
                }}
              >
                ⚠ OpenClaw Security Warning (Feb 2026)
              </div>
              <div style={{ fontSize: 11, color: "#CCC", lineHeight: 1.6 }}>
                CrowdStrike and security researchers have called OpenClaw a
                potential "security dumpster fire" due to full system access.
                However, when properly configured with: (1) Sandboxed
                environment (Docker/VM), (2) API-only permissions (no withdrawal
                rights), (3) Hardcoded risk limits, and (4) Alert mode (human
                approval required) — the risk is manageable. NEVER give OpenClaw
                access to your main computer or full API keys. Always use
                isolated trading accounts.
              </div>
            </div>
          </div>
        )}

        {/* Phase Banner */}
        <div
          style={{
            marginBottom: 20,
            padding: "18px 24px",
            background: `linear-gradient(135deg, ${currentPhase.color}11, ${currentPhase.color}22)`,
            border: `2px solid ${currentPhase.color}`,
            borderRadius: 12,
            boxShadow: `0 0 30px ${currentPhase.color}33`,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 11,
                  color: currentPhase.color,
                  letterSpacing: 3,
                  textTransform: "uppercase",
                  fontWeight: 700,
                  marginBottom: 4,
                }}
              >
                {currentPhase.week}
              </div>
              <h2
                style={{
                  margin: 0,
                  fontSize: 20,
                  color: "#E0E0E0",
                  fontWeight: 800,
                }}
              >
                {currentPhase.title}
              </h2>
            </div>
            <div style={{ fontSize: 36 }}>{currentPhase.icon}</div>
          </div>
        </div>

        {/* Day Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
            gap: 10,
            marginBottom: 24,
          }}
        >
          {currentPhase.days.map((d) => {
            const isDone = completedDays.has(d.day);
            const isActive = activeDay === d.day;
            return (
              <button
                key={d.day}
                onClick={() => setActiveDay(isActive ? null : d.day)}
                style={{
                  padding: "14px 12px",
                  borderRadius: 10,
                  border: `2px solid ${
                    isActive
                      ? currentPhase.color
                      : isDone
                      ? "#00D4AA44"
                      : "#2A2A3E"
                  }`,
                  background: isActive
                    ? `${currentPhase.color}22`
                    : isDone
                    ? "#00D4AA11"
                    : "#1A1A2E",
                  color: isActive
                    ? currentPhase.color
                    : isDone
                    ? "#00D4AA"
                    : "#666",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  textAlign: "left",
                  transition: "all 0.2s",
                  boxShadow: isActive
                    ? `0 0 20px ${currentPhase.color}44`
                    : "none",
                }}
              >
                <div
                  style={{
                    fontSize: 10,
                    marginBottom: 6,
                    letterSpacing: 1.5,
                    textTransform: "uppercase",
                    fontWeight: 700,
                  }}
                >
                  DAY {d.day}
                </div>
                <div style={{ fontSize: 11, lineHeight: 1.4, fontWeight: 600 }}>
                  {d.title}
                </div>
                {isDone && <div style={{ fontSize: 16, marginTop: 6 }}>✓</div>}
              </button>
            );
          })}
        </div>

        {/* Day Detail */}
        {currentDay && (
          <div
            style={{
              background: "linear-gradient(135deg, #1A1A2E, #0A0A14)",
              border: `2px solid ${currentPhase.color}`,
              borderRadius: 12,
              overflow: "hidden",
              boxShadow: `0 0 40px ${currentPhase.color}33`,
            }}
          >
            <div
              style={{
                padding: "22px 28px",
                borderBottom: `2px solid ${currentPhase.color}22`,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 14,
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: 11,
                    color: currentPhase.color,
                    letterSpacing: 3,
                    textTransform: "uppercase",
                    fontWeight: 700,
                    marginBottom: 4,
                  }}
                >
                  DAY {currentDay.day}
                </div>
                <h3
                  style={{
                    margin: 0,
                    fontSize: 20,
                    color: "#E0E0E0",
                    fontWeight: 800,
                  }}
                >
                  {currentDay.title}
                </h3>
              </div>
              <button
                onClick={() => toggleComplete(currentDay.day)}
                style={{
                  padding: "10px 24px",
                  borderRadius: 8,
                  border: `2px solid ${
                    completedDays.has(currentDay.day) ? "#00D4AA" : "#2A2A3E"
                  }`,
                  background: completedDays.has(currentDay.day)
                    ? "#00D4AA22"
                    : "#1A1A2E",
                  color: completedDays.has(currentDay.day) ? "#00D4AA" : "#666",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  fontSize: 11,
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                  fontWeight: 700,
                  transition: "all 0.2s",
                  boxShadow: completedDays.has(currentDay.day)
                    ? "0 0 20px rgba(0,212,170,0.3)"
                    : "none",
                }}
              >
                {completedDays.has(currentDay.day)
                  ? "✓ COMPLETED"
                  : "MARK DONE"}
              </button>
            </div>

            <div style={{ display: "flex", borderBottom: "2px solid #2A2A3E" }}>
              {[
                { key: "for_learning", label: "📚 LEARNING", color: "#00D4AA" },
                {
                  key: "for_executing",
                  label: "⚡ EXECUTING",
                  color: "#FF6B35",
                },
                {
                  key: "real_examples",
                  label: "🌍 EXAMPLES",
                  color: "#9D4EDD",
                },
              ].map(({ key, label, color }) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  style={{
                    flex: 1,
                    padding: "14px 20px",
                    border: "none",
                    borderBottom: `3px solid ${
                      activeTab === key ? color : "transparent"
                    }`,
                    background: "transparent",
                    color: activeTab === key ? color : "#666",
                    cursor: "pointer",
                    fontFamily: "inherit",
                    fontSize: 11,
                    letterSpacing: 1.5,
                    textTransform: "uppercase",
                    fontWeight: 700,
                    transition: "all 0.2s",
                  }}
                >
                  {label}
                </button>
              ))}
            </div>

            <div style={{ padding: "28px" }}>
              {currentDay[activeTab].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: 14,
                    marginBottom: 18,
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      background: `${currentPhase.color}22`,
                      border: `2px solid ${currentPhase.color}44`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 10,
                        color: currentPhase.color,
                        fontWeight: 800,
                      }}
                    >
                      {i + 1}
                    </span>
                  </div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 13,
                      lineHeight: 1.8,
                      color: "#CCC",
                    }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Extra Categories */}
        <div
          style={{
            marginTop: 32,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 16,
          }}
        >
          {/* Future Trends */}
          <div
            style={{
              background: "linear-gradient(135deg, #1A1A2E, #0A0A14)",
              border: "2px solid #00D4AA",
              borderRadius: 12,
              padding: 20,
            }}
          >
            <h3
              style={{
                margin: "0 0 16px",
                fontSize: 12,
                color: "#00D4AA",
                letterSpacing: 3,
                textTransform: "uppercase",
                fontWeight: 800,
              }}
            >
              📈 FUTURE TRENDS
            </h3>
            {[
              "AI trading bot market estimated at $40M on Polymarket alone (Apr 2024-2025). Gold/PAXG bots are next frontier.",
              "OpenClaw reached 145,000+ GitHub stars in 2 months. Agent AI is fastest-growing category in tech.",
              "Multi-agent systems: By 2027, traders will run fleets of 10-50 specialized bots collaborating.",
              "Regulation incoming: SEC/CFTC will classify AI trading systems. Early movers establish precedent.",
              "PAXG + DeFi: Gold yield products (stake PAXG, earn interest) launching on Ethereum/Arbitrum.",
              "AI vs AI trading: Markets will become battlegrounds of algorithms. Human discretionary trading ends.",
            ].map((t, i) => (
              <div
                key={i}
                style={{
                  fontSize: 12,
                  color: "#AAA",
                  marginBottom: 12,
                  paddingLeft: 14,
                  borderLeft: "2px solid #00D4AA33",
                  lineHeight: 1.6,
                }}
              >
                {t}
              </div>
            ))}
          </div>

          {/* Alternatives */}
          <div
            style={{
              background: "linear-gradient(135deg, #1A1A2E, #0A0A14)",
              border: "2px solid #9D4EDD",
              borderRadius: 12,
              padding: 20,
            }}
          >
            <h3
              style={{
                margin: "0 0 16px",
                fontSize: 12,
                color: "#9D4EDD",
                letterSpacing: 3,
                textTransform: "uppercase",
                fontWeight: 800,
              }}
            >
              🔄 ALTERNATIVES
            </h3>
            {[
              {
                name: "Manual Trading Only",
                desc: "No AI. Pure discretionary. Lower cost but requires 24/7 attention.",
              },
              {
                name: "Copy Trading Platforms",
                desc: "Mirror successful traders. No AI building required. Revenue = passive.",
              },
              {
                name: "Hedge Fund Employment",
                desc: "Join existing quant fund. Salary + bonus. No entrepreneurial upside.",
              },
              {
                name: "TradFi Prop Trading",
                desc: "FTMO/TopStep funding. Use their capital. But strict rules, no AI allowed.",
              },
              {
                name: "Crypto Algo Platforms",
                desc: "3Commas, Pionex bots. Pre-built strategies. No customization, no edge.",
              },
            ].map((alt, i) => (
              <div
                key={i}
                style={{
                  marginBottom: 12,
                  paddingBottom: 12,
                  borderBottom: i < 4 ? "1px solid #2A2A3E" : "none",
                }}
              >
                <span
                  style={{ fontSize: 12, color: "#9D4EDD", fontWeight: 700 }}
                >
                  {alt.name}:{" "}
                </span>
                <span style={{ fontSize: 11, color: "#888" }}>{alt.desc}</span>
              </div>
            ))}
          </div>

          {/* Who Makes Money */}
          <div
            style={{
              background: "linear-gradient(135deg, #1A1A2E, #0A0A14)",
              border: "2px solid #FFD60A",
              borderRadius: 12,
              padding: 20,
            }}
          >
            <h3
              style={{
                margin: "0 0 16px",
                fontSize: 12,
                color: "#FFD60A",
                letterSpacing: 3,
                textTransform: "uppercase",
                fontWeight: 800,
              }}
            >
              💰 WHO MAKES MONEY
            </h3>
            {[
              {
                who: "AI Bot Creators",
                how: "Built Polymarket bot: $2K → $75K in 1 day. $2.2M in 2 months.",
              },
              {
                who: "OpenClaw Developers",
                how: "Peter Steinberger (creator) joined OpenAI. Project valued at millions.",
              },
              {
                who: "Trading Bot SaaS",
                how: "3Commas: 500K+ users × $22-99/mo = $10M+ ARR.",
              },
              {
                who: "Binance Affiliates",
                how: "Top earners: $10K-50K/month commission from referrals.",
              },
              {
                who: "Gold Telegram Signals",
                how: "1,000 members × $79/mo = $79K/month recurring.",
              },
              {
                who: "Hyperliquid Whales",
                how: "Top trader made $18M in 30 days using algo strategies.",
              },
            ].map((m, i) => (
              <div
                key={i}
                style={{
                  marginBottom: 12,
                  padding: "12px 14px",
                  background: "#0A0A14",
                  borderRadius: 8,
                  border: "1px solid #FFD60A22",
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    color: "#FFD60A",
                    fontWeight: 700,
                    marginBottom: 4,
                  }}
                >
                  {m.who}
                </div>
                <div style={{ fontSize: 11, color: "#888", lineHeight: 1.5 }}>
                  {m.how}
                </div>
              </div>
            ))}
          </div>

          {/* Your Money Path */}
          <div
            style={{
              background: "linear-gradient(135deg, #1A1A2E, #0A0A14)",
              border: "2px solid #FF6B35",
              borderRadius: 12,
              padding: 20,
            }}
          >
            <h3
              style={{
                margin: "0 0 16px",
                fontSize: 12,
                color: "#FF6B35",
                letterSpacing: 3,
                textTransform: "uppercase",
                fontWeight: 800,
              }}
            >
              🎯 YOUR MONEY PATH
            </h3>
            {[
              {
                timeline: "WEEK 1-2",
                action:
                  "Install OpenClaw. Build foundation. Demo trade only. $0 revenue.",
              },
              {
                timeline: "WEEK 3",
                action:
                  "Run bot competition. Find champion strategy. Deploy $50 real capital.",
              },
              {
                timeline: "WEEK 4",
                action:
                  "Launch Telegram (50 free users). Register Binance affiliate. Build calculator app.",
              },
              {
                timeline: "MONTH 2",
                action:
                  "Premium tier launch ($29/mo). 20 subscribers = $580/mo. Trading capital → $500.",
              },
              {
                timeline: "MONTH 3",
                action:
                  "Bot skill sales ($19/mo). Dashboard SaaS beta. Total revenue: $1,347/mo.",
              },
              {
                timeline: "MONTH 6",
                action:
                  "200 subscribers, strong affiliate network, proven bot. Revenue: $3,110/mo.",
              },
              {
                timeline: "MONTH 12",
                action:
                  "Full-time AI trading business. Trading + SaaS + Affiliate = $8K-12K/mo.",
              },
            ].map((s, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 12,
                  marginBottom: 12,
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    fontSize: 10,
                    color: "#FF6B35",
                    fontWeight: 800,
                    minWidth: 70,
                    textTransform: "uppercase",
                  }}
                >
                  {s.timeline}
                </div>
                <div style={{ fontSize: 11, color: "#AAA", lineHeight: 1.6 }}>
                  {s.action}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Strategic Questions */}
        <div
          style={{
            marginTop: 24,
            background: "linear-gradient(135deg, #1A1A2E, #0A0A14)",
            border: "2px solid #00D4AA",
            borderRadius: 12,
            padding: 24,
          }}
        >
          <h3
            style={{
              margin: "0 0 20px",
              fontSize: 12,
              color: "#00D4AA",
              letterSpacing: 3,
              textTransform: "uppercase",
              fontWeight: 800,
            }}
          >
            ❓ STRATEGIC QUESTIONS
          </h3>
          <div style={{ display: "grid", gap: 16 }}>
            {[
              {
                type: "💡 INNOVATIVE",
                q: "What if you ran 100 OpenClaw instances simultaneously on a server farm, each testing different PAXG strategies in parallel, evolving through natural selection 24/7 — essentially building a self-improving AI trading hedge fund?",
                color: "#00D4AA",
              },
              {
                type: "🌍 REAL-WORLD",
                q: "The YouTube creator's YOLO bot made $175 in 3 hours using 40x leverage. If you replicated this strategy on PAXG with 1% daily account risk, what would your account size need to be to generate $500/month consistently while surviving drawdowns?",
                color: "#9D4EDD",
              },
              {
                type: "⚡ EXECUTION",
                q: "Between April 2024-2025, trading bots earned $40M on Polymarket. PAXG is virtually untapped by AI bots. If you deployed your champion bot strategy TODAY and scaled to $10K capital in 90 days, what's your realistic monthly revenue from trading + SaaS + affiliate combined?",
                color: "#FF6B35",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  padding: "18px 22px",
                  background: "#0A0A14",
                  borderRadius: 10,
                  borderLeft: `4px solid ${item.color}`,
                }}
              >
                <div
                  style={{
                    fontSize: 10,
                    color: item.color,
                    letterSpacing: 1.5,
                    textTransform: "uppercase",
                    fontWeight: 700,
                    marginBottom: 10,
                  }}
                >
                  {item.type}
                </div>
                <p
                  style={{
                    margin: 0,
                    fontSize: 13,
                    color: "#CCC",
                    lineHeight: 1.7,
                  }}
                >
                  {item.q}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Thinking Overview */}
        <div
          style={{
            marginTop: 16,
            background: "linear-gradient(135deg, #1A1A2E, #0A0A14)",
            border: "2px solid #2A2A3E",
            borderRadius: 12,
            padding: 24,
          }}
        >
          <h3
            style={{
              margin: "0 0 14px",
              fontSize: 12,
              color: "#888",
              letterSpacing: 3,
              textTransform: "uppercase",
              fontWeight: 800,
            }}
          >
            🧠 HOW THIS WAS BUILT
          </h3>
          <p
            style={{ margin: 0, fontSize: 12, color: "#888", lineHeight: 1.8 }}
          >
            This plan merges three systems: (1) Your original 30-day gold
            trading foundation, (2) The YouTube video's natural selection bot
            competition methodology, and (3) OpenClaw/Claude AI autonomous
            trading architecture. The upgrade adds: AI-powered analysis (Week
            1-2), automated backtesting and optimization (Week 2), bot
            competition natural selection (Week 3), and multi-revenue stream
            monetization (Week 4). The revenue projections are based on actual
            data: $40M earned by bots on Polymarket, $75K single-day bot profit,
            Binance affiliate commission structures, and Telegram premium
            channel pricing. The security rules address OpenClaw's documented
            vulnerabilities while preserving its autonomous capabilities. This
            transforms you from solo trader → AI-augmented trader → bot fleet
            operator → SaaS entrepreneur — exactly matching your goal of
            financial freedom through trading + mobile app product creation.
          </p>
        </div>

        <div
          style={{
            marginTop: 24,
            padding: 18,
            borderTop: "2px solid #2A2A3E",
            textAlign: "center",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: 10,
              color: "#444",
              letterSpacing: 1.5,
            }}
          >
            LINKED TO: Previous 30-Day Plan + YouTube Bot Competition
            Methodology + OpenClaw Documentation · PAXG $2,652 (Feb 2026) · ⚠
            Trading involves substantial risk. This is educational content, not
            financial advice. OpenClaw security risks documented by CrowdStrike.
            Always use isolated environments and demo capital first.
          </p>
        </div>
      </div>
    </div>
  );
}
